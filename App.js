import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import biscoito from "./src/assets/biscoito.png";
import biscoitoAberto from "./src/assets/biscoitoAberto.png";
import frases from "./src/data/frases";

export default function App() {
  const [frase, setFrase] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleBreakCook = () => {
    let escolherFrase = Math.floor(Math.random() * frases.length);
    setIsOpen(true);
    setFrase(frases[escolherFrase]);
  };

  const newCook = () => {
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {!isOpen ? (
        <Image style={styles.image} source={biscoito} />
      ) : (
        <>
          <Image style={styles.image} source={biscoitoAberto} />
          <Text style={styles.text}>"{frase}"</Text>
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={!isOpen ? handleBreakCook : newCook}
      >
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>
            {!isOpen ? "Quebrar biscoito" : "Biscoito novo"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  buttonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
