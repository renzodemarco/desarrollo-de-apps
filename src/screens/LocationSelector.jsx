import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import MapPreview from '../components/MapPreview'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import * as Location from 'expo-location'


const LocationSelector = ({ navigation }) => {

  const [location, setLocation] = useState({ latitude: '-34.9206797', longitude: '-57.9537638' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [address, setAddress] = useState("")

  useEffect(() => {
    (async () => {  // esto es una función autoejecutable
      const { status } = await Location.requestForegroundPermissionsAsync()
    })()
  }, [])

  const onConfirmAddress = () => console.log("Confirm")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{address}</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude} />
      <AddButton title="Confirmar Localizacion" onPress={onConfirmAddress} />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    gap: 20
  },
  text: {
    fontSize: 16
  }
})