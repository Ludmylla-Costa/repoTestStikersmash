import { View, Image } from "react-native";

export default function EMOjiSticker({ imageSize, stickerSource}) {
    return (
        <View style = {{top : -350}}>
            <Image
                source={stickerSource}
                resizeMode='contain'
                style={{ width: ImageSize, height: ImageSize }}
            />
        </View>
    )
}
