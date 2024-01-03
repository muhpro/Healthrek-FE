import React from 'react';
import { IReceiptProps } from '../../Schemas';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
// Font.register({
//   family: 'Baloo',
//   src: 'https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;600&display=swap',
// });

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: 600,
    // fontFamily: 'Baloo',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    // fontFamily: 'Baloo',
  },
});

export const ReceiptSample = ({ title, sub }: IReceiptProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{sub}</Text>
    </View>
  );
};
