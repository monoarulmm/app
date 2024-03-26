import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { COLORS } from '../constants';

const BottomSheet = ({ bottomSheetRef, children }) => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressBack={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        draggableIcon: {
          backgroundColor: COLORS.gray,
          width: 100,
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Dinajpur Institute of Science & Technology
        </Text>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 100, height: 100, marginBottom: 5 }}
          resizeMode="cover"
        />
 
        {/* TouchableOpacity for opening website */}
        <TouchableOpacity onPress={() => openLink('https://www.distdinajpur.edu.bd')}>
          <Text style={{ color: 'blue', fontSize: 16, marginTop: 5 }}>
            Click here to open website
          </Text>
        </TouchableOpacity>

        {/* TouchableOpacity for Facebook */}
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/distdinajpur')}>
          <Text style={{ color: 'blue', fontSize: 16, marginTop: 5 }}>
            Click here to visit our Facebook Page
          </Text>
        </TouchableOpacity>
        {/* TouchableOpacity for Facebook */}
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/groups/342451326515939/')}>
          <Text style={{ color: 'blue', fontSize: 16, marginTop: 5 }}>
            Click here to visit our Facebook Group
          </Text>
        </TouchableOpacity>

        {/* TouchableOpacity for Twitter */}
        <TouchableOpacity onPress={() => openLink('https://www.youtube.com/@distpolytechnicinstitute7533')}>
          <Text style={{ color: 'blue', fontSize: 16, marginTop: 5 }}>
            Click here to visit our Official YouTube Channel
          </Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default BottomSheet;
