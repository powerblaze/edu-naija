export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          role: 'admin' | 'teacher' | 'student' | 'parent'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          avatar_url?: string | null
          role: 'admin' | 'teacher' | 'student' | 'parent'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          role?: 'admin' | 'teacher' | 'student' | 'parent'
          created_at?: string
          updated_at?: string
        }
      }
      students: {
        Row: {
          id: string
          user_id: string
          registration_number: string
          first_name: string
          last_name: string
          middle_name: string | null
          date_of_birth: string
          gender: 'male' | 'female'
          class_id: string
          admission_date: string
          status: 'active' | 'inactive' | 'graduated' | 'suspended'
          boarding_status: 'day' | 'boarding'
          address: string
          phone_number: string | null
          email: string | null
          medical_information: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          registration_number: string
          first_name: string
          last_name: string
          middle_name?: string | null
          date_of_birth: string
          gender: 'male' | 'female'
          class_id: string
          admission_date: string
          status: 'active' | 'inactive' | 'graduated' | 'suspended'
          boarding_status: 'day' | 'boarding'
          address: string
          phone_number?: string | null
          email?: string | null
          medical_information?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          registration_number?: string
          first_name?: string
          last_name?: string
          middle_name?: string | null
          date_of_birth?: string
          gender?: 'male' | 'female'
          class_id?: string
          admission_date?: string
          status?: 'active' | 'inactive' | 'graduated' | 'suspended'
          boarding_status?: 'day' | 'boarding'
          address?: string
          phone_number?: string | null
          email?: string | null
          medical_information?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      teachers: {
        Row: {
          id: string
          user_id: string
          staff_id: string
          first_name: string
          last_name: string
          middle_name: string | null
          date_of_birth: string
          gender: 'male' | 'female'
          qualification: string
          position: string
          department: string
          date_employed: string
          status: 'active' | 'inactive' | 'on_leave'
          address: string
          phone_number: string
          email: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          staff_id: string
          first_name: string
          last_name: string
          middle_name?: string | null
          date_of_birth: string
          gender: 'male' | 'female'
          qualification: string
          position: string
          department: string
          date_employed: string
          status: 'active' | 'inactive' | 'on_leave'
          address: string
          phone_number: string
          email: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          staff_id?: string
          first_name?: string
          last_name?: string
          middle_name?: string | null
          date_of_birth?: string
          gender?: 'male' | 'female'
          qualification?: string
          position?: string
          department?: string
          date_employed?: string
          status?: 'active' | 'inactive' | 'on_leave'
          address?: string
          phone_number?: string
          email?: string
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          level: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          section: string
          academic_year: string
          class_teacher_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          level: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          section: string
          academic_year: string
          class_teacher_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          level?: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          section?: string
          academic_year?: string
          class_teacher_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subjects: {
        Row: {
          id: string
          code: string
          name: string
          description: string | null
          level: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          department: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          code: string
          name: string
          description?: string | null
          level: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          department: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          code?: string
          name?: string
          description?: string | null
          level?: 'Primary' | 'Junior Secondary' | 'Senior Secondary'
          department?: string
          created_at?: string
          updated_at?: string
        }
      }
      teacher_subjects: {
        Row: {
          id: string
          teacher_id: string
          subject_id: string
          class_id: string
          academic_year: string
          term: 'First' | 'Second' | 'Third'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          teacher_id: string
          subject_id: string
          class_id: string
          academic_year: string
          term: 'First' | 'Second' | 'Third'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          teacher_id?: string
          subject_id?: string
          class_id?: string
          academic_year?: string
          term?: 'First' | 'Second' | 'Third'
          created_at?: string
          updated_at?: string
        }
      }
      assessments: {
        Row: {
          id: string
          student_id: string
          subject_id: string
          class_id: string
          term: 'First' | 'Second' | 'Third'
          academic_year: string
          assessment_type: 'CA1' | 'CA2' | 'CA3' | 'Exam'
          score: number
          max_score: number
          date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          subject_id: string
          class_id: string
          term: 'First' | 'Second' | 'Third'
          academic_year: string
          assessment_type: 'CA1' | 'CA2' | 'CA3' | 'Exam'
          score: number
          max_score: number
          date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          subject_id?: string
          class_id?: string
          term?: 'First' | 'Second' | 'Third'
          academic_year?: string
          assessment_type?: 'CA1' | 'CA2' | 'CA3' | 'Exam'
          score?: number
          max_score?: number
          date?: string
          created_at?: string
          updated_at?: string
        }
      }
      results: {
        Row: {
          id: string
          student_id: string
          subject_id: string
          class_id: string
          term: 'First' | 'Second' | 'Third'
          academic_year: string
          ca1: number
          ca2: number
          ca3: number
          exam: number
          total: number
          grade: string
          remarks: string
          position: number
          teacher_comment: string | null
          principal_comment: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          subject_id: string
          class_id: string
          term: 'First' | 'Second' | 'Third'
          academic_year: string
          ca1: number
          ca2: number
          ca3: number
          exam: number
          total: number
          grade: string
          remarks: string
          position: number
          teacher_comment?: string | null
          principal_comment?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          subject_id?: string
          class_id?: string
          term?: 'First' | 'Second' | 'Third'
          academic_year?: string
          ca1?: number
          ca2?: number
          ca3?: number
          exam?: number
          total?: number
          grade?: string
          remarks?: string
          position?: number
          teacher_comment?: string | null
          principal_comment?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}