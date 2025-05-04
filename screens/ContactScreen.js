import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('Semua kolom harus diisi!');
      return;
    }

    // Simulasi kirim pesan
    alert('Pesan berhasil dikirim!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hubungi Kami</Text>

      <View style={styles.contactBox}>
        <Text style={styles.label}>📍 Alamat:</Text>
        <Text style={styles.info}>Jl. Cinta Coding No. 404, Jakarta Selatan</Text>

        <Text style={styles.label}>📧 Email:</Text>
        <Text style={styles.info} onPress={() => Linking.openURL('mailto:admin@hostsel.id')}>
          admin@hostsel.id
        </Text>

        <Text style={styles.label}>📞 Telepon:</Text>
        <Text style={styles.info} onPress={() => Linking.openURL('tel:+6281234567890')}>
          +62 812-3456-7890
        </Text>
      </View>

      <Text style={styles.subtitle}>Kirim Pesan Langsung:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Anda"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Anda"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Pesan Anda"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  contactBox: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
