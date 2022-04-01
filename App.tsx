import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet, Text, TouchableOpacity, useColorScheme, View
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import MainComp from './src/components/mainComp';
import MinusBtn from './src/components/minusBtn';
import PlusBtn from './src/components/plusBtn';
import configureStore from './src/store/configureStore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import NewApp from './newApp';
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';
import Chat from './chat';
let store = configureStore()
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getFixedUri = async (uri: string): Promise<string> => {
    if (uri.startsWith('content://')) {
      const destPath = `${RNFS.TemporaryDirectoryPath}/tempVideo`;
      await RNFS.copyFile(uri, destPath);
      return destPath;
    }
    return uri;
  };
  async function addPhoto() {
    try {


      const result = await launchImageLibrary({ mediaType: 'mixed', includeBase64: false });
      if (result && result.assets?.length) {
        const reference = storage().ref(
          `/kala/${result.assets[0].fileName}`
        );
        if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
          let vidURI = await getFixedUri(result.assets[0].uri);
          console.log(vidURI);

          const task = reference.putFile(
            // result.assets[0].uri.replace("file://", "")
            vidURI
          );
          task.then((res) => {
            console.log('done', res);

          });
        }
        // var data: any = new FormData() as any;
        // data.append('image', {

        //   uri: result.assets[0].uri,
        //   type: "image/jpeg",
        //   name: 'fwef.jpg'

        // });
        // var config = {
        //   method: 'post',
        //   url: 'http://bab4-171-79-103-170.ngrok.io/imageUpload/06ee885c-54e2-4383-9bf1-6ded2ff57283',
        //   headers: {
        //     'Content-Type': 'multipart/form-data; boundary="another cool boundary";',
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGVAZ21haWwuY29tIiwiZXhwIjoxNjQ4NTM3ODQ3LCJpYXQiOjE2NDc5MzMwNDd9.JVl8K00Js7SlO442IIn_-MrX0bx4QMNoCoI-PhLAHiI',
        //   },
        // };
        // const response = await fetch(config.url, {
        //   method: 'POST',
        //   body: data,
        //   headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGVAZ21haWwuY29tIiwiZXhwIjoxNjQ3OTI4NDA3LCJpYXQiOjE2NDczMjM2MDd9.-3lSJCu98hVDZll7gEjj7PaCcHsZvEbxWhhydXDyZdI' }
        // });
        //@ts-ignore
        // const formImageData = data.get("image");
        // const parsedFormImageData = JSON.parse(formImageData);


        // let p = await axios.post(config.url, data, { headers: config.headers })
        // console.log(p);

        // formData.append('file', result.assets[0].uri);
        // console.log(formData.get('file'))
        // let header = {
        //   'Content-Type': 'multipart/form-data; boundary="another cool boundary";',
        //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGVAZ21haWwuY29tIiwiZXhwIjoxNjQ4NDQ4OTM3LCJpYXQiOjE2NDc4NDQxMzd9.4zY2kjy6YKLzhlxXPSs9vEx7WyUqb7qZwW63wco56GE'
        // }
        // try {
        //   let apiRes = await axios.post('http://16b4-171-79-103-170.ngrok.io/imageUpload/15ece1ab-702e-4bc9-b3a8-ccd34bcb7323', formData, { headers: header });
        // } catch (error) {
        //   console.log('API-ERRRROR', error);
        // }
      }
    } catch (error) {
      // console.log(errorr);
      console.log(error);

    }
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'pink' }}>
      <Provider store={store}>
        {/* <MainComp /> */}
        {/* <View style={styles.buttonsWrapper}>
          <PlusBtn />
          <MinusBtn />
          <TouchableOpacity onPress={addPhoto}>
            <Text>
              Add Photo
            </Text>
          </TouchableOpacity>
        </View> */}
        <Chat/>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 48
  }
});

export default App;
