export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          preferred_currency: string
          initial_balance: number
          current_balance: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          preferred_currency?: string
          initial_balance?: number
          current_balance?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          preferred_currency?: string
          initial_balance?: number
          current_balance?: number
          created_at?: string
          updated_at?: string
        }
      }
      bets: {
        Row: {
          id: string
          user_id: string
          event: string
          sport: string
          market: string
          odds: number
          stake_amount: number
          potential_return: number
          status: 'pending' | 'won' | 'lost'
          result_amount: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          event: string
          sport: string
          market: string
          odds: number
          stake_amount: number
          status?: 'pending' | 'won' | 'lost'
          result_amount?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          event?: string
          sport?: string
          market?: string
          odds?: number
          stake_amount?: number
          status?: 'pending' | 'won' | 'lost'
          result_amount?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      settings: {
        Row: {
          user_id: string
          staking_method: string
          loss_limit_daily: number | null
          profit_target_daily: number | null
          notifications_enabled: boolean
          dark_mode: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          staking_method?: string
          loss_limit_daily?: number | null
          profit_target_daily?: number | null
          notifications_enabled?: boolean
          dark_mode?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          staking_method?: string
          loss_limit_daily?: number | null
          profit_target_daily?: number | null
          notifications_enabled?: boolean
          dark_mode?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      achievements: {
        Row: {
          id: string
          user_id: string
          achievement_type: string
          achievement_name: string
          achieved_at: string
        }
        Insert: {
          id?: string
          user_id: string
          achievement_type: string
          achievement_name: string
          achieved_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          achievement_type?: string
          achievement_name?: string
          achieved_at?: string
        }
      }
    }
  }
}