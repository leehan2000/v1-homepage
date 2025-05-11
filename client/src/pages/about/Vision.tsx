import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Pexels 무료 이미지 적용
const freeImages = {
  essence: 'https://images.pexels.com/photos/6804586/pexels-photo-6804586.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600', // 서버룸에서 네트워크 케이블 다루는 모습
  nameMeaning: 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600', // 활주로 위 비행기 윙뷰
  vision: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600', // 미래적 기술 콘셉트
  mission: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600', // 다양성 있는 팀 브레인스토밍 장면
  attitude: 'https://images.pexels.com/photos/9169913/pexels-photo-9169913.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600' // 'Never Give Up' 레터보드 이미지
};

const sectionTransition = { duration: 0.8, ease: 'easeInOut' };

const VisionPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>비전 & 미션 | 브이원정보통신</title>
        <meta
          name="description"
          content="브이원정보통신이 추구하는 비전과 미션을 소개합니다. 신뢰를 연결하는 통신회사, 브이원의 가치와 목표를 확인하세요."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={sectionTransition}
      >
        <div className="absolute inset-0">
          <img
            src={freeImages.essence}
            alt="통신의 본질"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...sectionTransition, delay: 0.3 }}
          >
            우리는 왜 '브이원'이 되었는가
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...sectionTransition, delay: 0.6 }}
          >
            존재의 이유, 그리고 이름에 담긴 약속
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Essence Section */}
        <motion.section
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
        >
          <div className="lg:w-1/2">
            <img
              src={freeImages.essence}
              alt="통신의 본질"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6 text-gray-700 text-lg">
            <h2 className="text-3xl font-bold">통신의 본질</h2>
            <p>통신이라는 말은 흔히 기술을 떠올리게 합니다. 하지만 우리가 이 일을 시작하며 느낀 건, 그 너머에 있는 본질이었습니다. 사람과 사람을 잇는 것. 이해와 신뢰를 전하는 일.</p>
            <p>우리는 언제나 현장에서 답을 찾았습니다. 인터넷 하나, 전화선 하나를 연결하는 일조차 고객의 하루, 고객의 생업, 고객의 기대와 연결되어 있다는 사실을 우리는 수없이 마주했고, 그만큼 무겁게 받아들였습니다.</p>
            <p>우리가 바라는 일은, 단순한 연결이 아닙니다. 신뢰를 매개로 한 지속적인 동행입니다.</p>
          </div>
        </motion.section>

        {/* Name Meaning Section */}
        <motion.section
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
        >
          <div className="lg:w-1/2">
            <img
              src={freeImages.nameMeaning}
              alt="비행기 윙뷰"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6 text-gray-700 text-lg">
            <h2 className="text-3xl font-bold flex items-center gap-3">✈️ 브이원(V1), 도약을 택한 이름</h2>
            <p>항공용어로 V1의 의미는 이륙하려 달리는 비행기가 더 이상 멈출 수 없는 순간을 의미합니다. 속도를 붙여 달리던 활주로 위에서 '속도가 붙어 뜰 수 밖에 없는 순간'이 찾아오는 시점.</p>
            <p>비행기는 이제 더는 멈출 수 없습니다. 그대로, 반드시 날아야 합니다.</p>
            <p>우리는 그 단어에 마음을 실었습니다. 망설임 없이 도약하겠다는 약속. 브이원이 누군가의 시작과 함께 이륙하는 존재가 되겠다는 다짐.</p>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={sectionTransition}
        >
          <h2 className="text-4xl font-bold text-gray-900">🎯 우리의 비전</h2>
          <img
            src={freeImages.vision}
            alt="미래 기술 콘셉트"
            className="mx-auto w-full max-w-3xl h-64 object-cover rounded-2xl shadow-xl"
          />
          <p className="text-xl italic text-primary-600">신뢰를 연결하는 통신회사의 꾸준한 여정</p>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">우리는 기술을 팔지 않습니다. 신뢰를 팔고, 연결을 돕습니다. 그 작은 연결이 누군가의 공간을 살리고, 누군가의 하루를 바꾸고, 어떤 이에게는 삶을 움직이게 한다는 걸 우리는 현장에서 매일 확인하고 있습니다.</p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
        >
          <h2 className="text-4xl font-bold text-gray-900">🛠 우리의 미션</h2>
          <img
            src={freeImages.mission}
            alt="팀 브레인스토밍"
            className="mx-auto w-full max-w-3xl h-64 object-cover rounded-2xl shadow-xl"
          />
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">우리는 고객의 언어로 소통하며, 불편을 먼저 발견하고, 수익보다 신뢰를 우선 선택합니다. 이러한 미션이 매일 현장에서 실현됩니다.</p>
        </motion.section>

        {/* Attitude Section */}
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={sectionTransition}
        >
          <h2 className="text-4xl font-bold text-gray-900">🌱 우리의 태도</h2>
          <img
            src={freeImages.attitude}
            alt="동기부여 칠판"
            className="mx-auto w-full max-w-3xl h-64 object-cover rounded-2xl shadow-xl"
          />
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">묻기보다 먼저 듣고, 빠르기보다 정확하게 움직이며, 성과보다 사람을 남깁니다. 이러한 태도가 브이원의 철학입니다.</p>
        </motion.section>
      </div>
    </>
  );
};

export default VisionPage;

