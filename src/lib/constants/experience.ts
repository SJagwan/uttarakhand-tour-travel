export interface ExperienceVideo {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  location: {
    en: string;
    hi: string;
  };
  videoUrl: string;
  thumbnail: string;
  relatedTourSlug?: string;
}

export const EXPERIENCE_VIDEOS: ExperienceVideo[] = [
  {
    id: "v1",
    title: {
      en: "Dehradun to Mussoorie",
      hi: "देहरादून से मसूरी",
    },
    location: {
      en: "Mussoorie Route",
      hi: "मसूरी मार्ग",
    },
    videoUrl:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/dehradun_to_mussoorie_Etz12T6pY.MP4?updatedAt=1772895876836",
    thumbnail:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/dehradun_to_mussoorie_Etz12T6pY.MP4/ik-thumbnail.jpg?tr=so-8",
    relatedTourSlug: "char-dham-yatra-tour",
  },
  {
    id: "v2",
    title: {
      en: "Mussoorie to Barkot",
      hi: "मसूरी से बड़कोट",
    },
    location: {
      en: "Yamunotri Route",
      hi: "यमुनोत्री मार्ग",
    },
    videoUrl:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/mussoorie_to_barkot_ICpplTqxy.MP4?updatedAt=1772895900861",
    thumbnail:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/mussoorie_to_barkot_ICpplTqxy.MP4/ik-thumbnail.jpg?tr=so-5",
    relatedTourSlug: "char-dham-yatra-tour",
  },
  {
    id: "v3",
    title: {
      en: "Barkot to Janki Chatti",
      hi: "बड़कोट से जानकी चट्टी",
    },
    location: {
      en: "Yamunotri Route",
      hi: "यमुनोत्री मार्ग",
    },
    videoUrl:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/barkot_to_jankichatti_IWrvDxQV2.MP4",
    thumbnail:
      "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/barkot_to_jankichatti_IWrvDxQV2.MP4/ik-thumbnail.jpg?tr=so-2",
    relatedTourSlug: "char-dham-yatra-tour",
  },
  {
    id: "v4",
    title: {
      en: "Janki Chatti to Uttarkashi",
      hi: "जानकी चट्टी से उत्तरकाशी",
    },
    location: {
      en: "Gangotri Route",
      hi: "गंगोत्री मार्ग",
    },
    videoUrl: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/janki_chatti_to_uttarkashi_hzQvajIrd.MP4",
    thumbnail: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/janki_chatti_to_uttarkashi_hzQvajIrd.MP4/ik-thumbnail.jpg?tr=so-2",
    relatedTourSlug: "char-dham-yatra-tour",
  },
  {
    id: "v5",
    title: {
      en: "Uttarkashi to Harsil",
      hi: "उत्तरकाशी से हर्षिल",
    },
    location: {
      en: "Gangotri Route",
      hi: "गंगोत्री मार्ग",
    },
    videoUrl: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/uttarkashi_to_harsil_xXg9LKJ9I.MP4",
    thumbnail: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/uttarkashi_to_harsil_xXg9LKJ9I.MP4/ik-thumbnail.jpg?tr=so-2",
    relatedTourSlug: "char-dham-yatra-tour",
  },
  {
    id: "v6",
    title: {
      en: "Harsil to Gaurikund",
      hi: "हर्षिल से गौरीकुंड",
    },
    location: {
      en: "Kedarnath Route",
      hi: "केदारनाथ मार्ग",
    },
    videoUrl: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/harsil_to_gaurikund_zmvI4hwQ_.MP4",
    thumbnail: "https://ik.imagekit.io/s27s12j97/Jagwan%20Tour%20and%20Travels/harsil_to_gaurikund_zmvI4hwQ_.MP4/ik-thumbnail.jpg?tr=so-2",
    relatedTourSlug: "char-dham-yatra-tour",
  }
];



