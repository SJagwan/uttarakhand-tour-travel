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

// You can update these 3 URLs with your actual video links
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
];
