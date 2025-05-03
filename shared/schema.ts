import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  role: text("role").default("client").notNull(),  // client, admin, staff
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 고객사 정보를 저장하는 테이블
export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  companyName: text("company_name").notNull(),
  businessType: text("business_type"),  // 업종
  address: text("address"),
  contractNumber: text("contract_number"),  // 계약 번호
  contractStartDate: timestamp("contract_start_date"),
  contractEndDate: timestamp("contract_end_date"),
  status: text("status").default("active").notNull(),  // active, inactive, pending
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 서비스 요청/티켓 테이블
export const serviceRequests = pgTable("service_requests", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").references(() => clients.id).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  requestType: text("request_type").notNull(),  // 문의, 장애, 요청, 불만
  priority: text("priority").default("medium").notNull(),  // high, medium, low
  status: text("status").default("open").notNull(),  // open, in-progress, resolved, closed
  assignedTo: integer("assigned_to").references(() => users.id),
  createdBy: integer("created_by").references(() => users.id).notNull(),
  resolvedAt: timestamp("resolved_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 서비스 요청에 대한 댓글/업데이트
export const serviceComments = pgTable("service_comments", {
  id: serial("id").primaryKey(),
  serviceRequestId: integer("service_request_id").references(() => serviceRequests.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  isInternal: boolean("is_internal").default(false),  // 내부 직원만 볼 수 있는 댓글인지
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 파일 첨부를 위한 테이블
export const attachments = pgTable("attachments", {
  id: serial("id").primaryKey(),
  serviceRequestId: integer("service_request_id").references(() => serviceRequests.id).notNull(),
  filename: text("filename").notNull(),
  fileType: text("file_type"),
  fileSize: integer("file_size"),
  filePath: text("file_path").notNull(),
  uploadedBy: integer("uploaded_by").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 관계 정의
export const usersRelations = relations(users, ({ many, one }) => ({
  clients: many(clients),
  createdRequests: many(serviceRequests, { relationName: "createdBy" }),
  assignedRequests: many(serviceRequests, { relationName: "assignedTo" }),
  comments: many(serviceComments),
  attachments: many(attachments),
}));

export const clientsRelations = relations(clients, ({ one, many }) => ({
  user: one(users, { fields: [clients.userId], references: [users.id] }),
  serviceRequests: many(serviceRequests),
}));

export const serviceRequestsRelations = relations(serviceRequests, ({ one, many }) => ({
  client: one(clients, { fields: [serviceRequests.clientId], references: [clients.id] }),
  creator: one(users, { fields: [serviceRequests.createdBy], references: [users.id], relationName: "createdBy" }),
  assignee: one(users, { fields: [serviceRequests.assignedTo], references: [users.id], relationName: "assignedTo" }),
  comments: many(serviceComments),
  attachments: many(attachments),
}));

export const serviceCommentsRelations = relations(serviceComments, ({ one }) => ({
  serviceRequest: one(serviceRequests, { fields: [serviceComments.serviceRequestId], references: [serviceRequests.id] }),
  user: one(users, { fields: [serviceComments.userId], references: [users.id] }),
}));

export const attachmentsRelations = relations(attachments, ({ one }) => ({
  serviceRequest: one(serviceRequests, { fields: [attachments.serviceRequestId], references: [serviceRequests.id] }),
  uploader: one(users, { fields: [attachments.uploadedBy], references: [users.id] }),
}));

// Schemas
export const insertUserSchema = createInsertSchema(users, {
  username: (schema) => schema.min(3, "Username must be at least 3 characters"),
  password: (schema) => schema.min(6, "Password must be at least 6 characters"),
  email: (schema) => schema.optional().email("Invalid email format"),
}).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  phone: true,
});

export const insertClientSchema = createInsertSchema(clients, {
  companyName: (schema) => schema.min(2, "Company name must be at least 2 characters"),
});

export const insertServiceRequestSchema = createInsertSchema(serviceRequests, {
  title: (schema) => schema.min(5, "Title must be at least 5 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
});

export const insertServiceCommentSchema = createInsertSchema(serviceComments, {
  content: (schema) => schema.min(1, "Comment cannot be empty"),
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertClient = z.infer<typeof insertClientSchema>;
export type Client = typeof clients.$inferSelect;

export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;
export type ServiceRequest = typeof serviceRequests.$inferSelect;

export type InsertServiceComment = z.infer<typeof insertServiceCommentSchema>;
export type ServiceComment = typeof serviceComments.$inferSelect;

export type Attachment = typeof attachments.$inferSelect;
