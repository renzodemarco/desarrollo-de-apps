import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import MapPreview from '../components/MapPreview'
import ButtonPrimary from '../components/ButtonPrimary'
import { useSelector } from 'react-redux'
import * as Location from 'expo-location'
import { usePutLocationMutation } from '../app/services/profile'


const LocationSelector = ({ navigation }) => {

  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [address, setAddress] = useState("")
  const localId = useSelector(state => state.auth.localId)
  const [triggerLocationMutation] = usePutLocationMutation()

  useEffect(() => {
    (async () => {  // esto es una función autoejecutable, hago esto porque no el useEffect no puede ser async
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('Permisos denegados')
        return
      }

      const { coords } = await Location.getCurrentPositionAsync()

      setLocation({ latitude: coords.latitude, longitude: coords.longitude })

    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (location.latitude) {  // solo se ejecuta cuando ya tengo la location
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCBZPbHfFf3Ogj7fE-BpCLibDEndbErOFU`)
        const data = await response.json()
        setAddress(data.results[0].formatted_address)
      }
    })()
  }, [location])

  const onConfirmAddress = async () => {
    const locationFormatted = {address, location}
    await triggerLocationMutation({locationFormatted, localId})
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{address}</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude} />
      <ButtonPrimary title="Confirmar Localizacion" onPress={onConfirmAddress} />
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