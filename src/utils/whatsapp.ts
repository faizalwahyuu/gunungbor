import { siteConfig } from '../config/siteConfig';

export interface ConsultationFormData {
  name: string;
  company: string;
  location: string;
  serviceType: string;
  terrainType: string;
  estimatedDepthOrVolume: string;
  notes: string;
}

export const generateConsultationMessage = (data: Partial<ConsultationFormData> = {}): string => {
  const parts = [
    'Halo Tim Enjiniring TERRADRILL, saya ingin berkonsultasi mengenai kebutuhan jasa pengeboran proyek:',
    '',
    `• Nama: ${data.name || '-'}` ,
    `• Perusahaan / Instansi: ${data.company || '-'}`,
    `• Lokasi Proyek: ${data.location || '-'}`,
    `• Jenis Pekerjaan: ${data.serviceType || 'Pengeboran Umum / Batuan'}`,
    `• Kondisi Medan / Akses: ${data.terrainType || 'Medan Pegunungan / Lereng / Keras'}`,
    `• Perkiraan Kebutuhan (Titik/Kedalaman): ${data.estimatedDepthOrVolume || '-'}`,
    data.notes ? `• Catatan Teknis Tambahan: ${data.notes}` : '',
    '',
    'Mohon informasi jadwal ketersediaan rig, tim teknis, dan prosedur estimasi penawaran teknis. Terima kasih.'
  ].filter(Boolean);

  return parts.join('\n');
};

export const openWhatsApp = (customMessage?: string) => {
  const defaultMsg = 'Halo TERRADRILL, saya ingin berkonsultasi mengenai kebutuhan jasa pengeboran untuk proyek saya.';
  const message = customMessage || defaultMsg;
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const getWhatsAppConsultationUrl = (data?: Partial<ConsultationFormData>): string => {
  const message = data ? generateConsultationMessage(data) : 'Halo TERRADRILL, saya ingin berkonsultasi mengenai kebutuhan jasa pengeboran untuk proyek saya.';
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};
