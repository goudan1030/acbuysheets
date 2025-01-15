import { supabase } from './supabase';

export async function getImageUrl(image_id: number | null, direct_url: string | null) {
  // 如果有直接链接，优先使用
  if (direct_url) return direct_url;
  
  // 否则通过 image_id 查询
  if (!image_id) return null;
  
  const { data } = await supabase
    .from('images')
    .select()
    .eq('id', image_id);

  return data?.[0]?.public_url || null;
}

export async function getQCImageUrl(qc_image_id: number | null, direct_url: string | null) {
  if (direct_url) return direct_url;
  
  if (!qc_image_id) return null;
  
  const { data } = await supabase
    .from('images')
    .select()
    .eq('id', qc_image_id);
    
  return data?.[0]?.public_url || null;
} 