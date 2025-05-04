import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Pressable,
} from 'react-native';

const articles = [
  {
    title: '5 Cara Tetap Produktif Meski Rebahan Terus',
    image: 'https://picsum.photos/id/1011/800/400',
    description:
      'Produktif bukan berarti sibuk, tapi tahu apa yang harus dilakukan. Yuk ubah mindset rebahan jadi cuan.',
  },
  {
    title: 'Ngoding Sambil Galau? Ini Solusinya!',
    image: 'https://picsum.photos/id/1005/800/400',
    description:
      'Emosi lagi berantakan tapi deadline makin mepet? Nih tips buat lo yang pengen tetap waras sambil ngoding.',
  },
  {
    title: 'Kenapa Banyak Anak Muda Selalu Galau Tentang Cinta?',
    image: 'https://picsum.photos/id/1040/800/400',
    description:
      'Udah bosen sama Windows? Mungkin ini saatnya nyoba hal baru. Linux bukan cuma buat hacker doang kok.',
  },
  {
    title: 'Rahasia Sukses Freelancer yang Jarang Diomongin',
    image: 'https://picsum.photos/id/1050/800/400',
    description:
      'Nggak semua orang mau sharing cara mereka dapet klien. Nih, bocoran dari yang udah kenyang asam garam.',
  },
  {
    title: 'AI Bakal Gantikan Kerja Kita? Nggak Juga!',
    image: 'https://picsum.photos/id/1035/800/400',
    description:
      'AI memang canggih, tapi manusia tetap punya kelebihan yang nggak bisa diganti. Ini dia alasannya.',
  },
];

export default function ArticleScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.03,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Artikel Populer</Text>

      {articles.map((article, index) => (
        <Pressable
          key={index}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={{ marginBottom: 24 }}
        >
          <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
            <Image source={{ uri: article.image }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
          </Animated.View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 12,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 12,
    marginBottom: 12,
    color: '#444',
  },
});
