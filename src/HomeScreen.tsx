/* eslint-disable @typescript-eslint/array-type */
import { AlbumData, HeaderData, ImagePicker } from "expo-image-multiple-picker";
import React, { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";

export const HomeScreen = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <ImagePicker
        onSave={(assets) => {
          console.log(assets);
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        multiple
        noAlbums
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola!</Text>
      <Text style={styles.text}>Esto es una aplicacion de prueba!</Text>
      <Button
        onPress={() => setOpen(true)}
        title="Seleccionar imagen"
      />
    </View>
  );
};

const styles = {
  picker: {},
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    paddingBottom: 20,
  },
};

const WhatsAppHeader = (props: HeaderData) => {
  return (
    <View
      style={{
        paddingTop: 40,
        padding: 10,
        height: 80,
        width: "100%",
        backgroundColor: "#252f39",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {props.view === "album" && (
        <Text style={{ color: "white", fontSize: 20 }}>Select an album</Text>
      )}
      {props.view === "gallery" && (
        <>
          {!props.noAlbums && (
            <TouchableOpacity onPress={props.goToAlbum}>
              <IonIcon
                name="arrow-back"
                size={30}
                color="#EDF8F5"
              />
            </TouchableOpacity>
          )}
          {props.imagesPicked > 0 && (
            <>
              <Text style={{ color: "white", fontSize: 20 }}>
                {props.imagesPicked} selected
              </Text>
              <TouchableOpacity onPress={props.save}>
                <Text style={{ color: "white", fontSize: 16 }}>OK</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </View>
  );
};

const WhatsAppAlbum = (props: AlbumData) => {
  return (
    <TouchableOpacity
      onPress={() => props.goToGallery(props.album)}
      style={{ flex: 1, height: 200 }}
    >
      <Image
        source={{ uri: props.thumb.uri }}
        style={{ width: "100%", height: "100%" }}
      ></Image>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ padding: 5, flexDirection: "row" }}>
          <EntypoIcon
            name="folder"
            color="white"
            size={16}
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            {props.album.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const WhatsAppCheck = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <FeatherIcon
        color="white"
        name="check"
        size={32}
      />
    </View>
  );
};

export default HomeScreen;
