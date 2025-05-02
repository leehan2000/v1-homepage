import { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useKakaoAddress } from "@/hooks/useKakaoAddress";
import { useGoogleSheets } from "@/hooks/useGoogleSheets";
import { useThankYou } from "@/components/common/ThankYouAlert";

const formSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  address: z.string().min(1, "주소를 검색해주세요"),
  addressDetail: z.string().optional(),
  service: z.string().min(1, "서비스 항목을 선택해주세요"),
  message: z.string().optional(),
  terms: z.boolean().refine(val => val === true, "개인정보 수집 및 이용에 동의해주세요")
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const { openSearchAddress } = useKakaoAddress();
  const { submitForm } = useGoogleSheets();
  const { showThankYou } = useThankYou();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      addressDetail: "",
      service: "",
      message: "",
      terms: false
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await submitForm(data);
      
      // Show thank you alert
      showThankYou();
      
      // Reset form
      form.reset();
      
    } catch (error) {
      toast({
        title: "제출 실패",
        description: "양식 제출 중 오류가 발생했습니다. 다시 시도해 주세요.",
        variant: "destructive",
      });
    }
  };

  const handleAddressSearch = () => {
    openSearchAddress((address) => {
      form.setValue("address", address, { shouldValidate: true });
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">상담 / 문의하기</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              브이원정보통신의 솔루션에 관심이 있으신가요? 아래 양식을 작성하시면 빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>
          
          <Card className="bg-gray-50 rounded-xl shadow-md">
            <CardContent className="p-6 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름 *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>연락처 *</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>주소 *</FormLabel>
                        <div className="flex">
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="주소 검색을 클릭하세요" 
                              readOnly 
                              className="rounded-r-none"
                            />
                          </FormControl>
                          <Button 
                            type="button" 
                            variant="secondary" 
                            onClick={handleAddressSearch}
                            className="rounded-l-none"
                          >
                            검색
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="addressDetail"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="상세주소를 입력하세요" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>서비스 항목 *</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="관심 있는 서비스를 선택하세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="무선통신">무선통신</SelectItem>
                            <SelectItem value="유선통신">유선통신</SelectItem>
                            <SelectItem value="차량관제/IoT">차량관제/IoT</SelectItem>
                            <SelectItem value="통합솔루션">통합솔루션</SelectItem>
                            <SelectItem value="기타">기타</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>문의 내용</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="필요한 서비스나 궁금한 점을 자유롭게 작성해주세요"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>개인정보 수집 및 이용에 동의합니다 *</FormLabel>
                          <FormDescription>
                            입력하신 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-primary hover:bg-primary/90"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "제출 중..." : "상담 신청하기"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
