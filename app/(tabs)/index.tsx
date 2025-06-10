import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import SearchBarApp from "../components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";

export default function Index() {

     const router =  useRouter()

     const {
      data: movies,
      loading: moviesLoading,
      error: moviesError,
    } = useFetch(() => fetchMovies({ query: "" }));


  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-12 mx-auto mb-5 mt-20" />
        <View className="flex-1 mt-5">
         <SearchBarApp onPress={()=>router.push('/search')} placeholder="Search Movies"   />
        
{moviesLoading && <ActivityIndicator size="large"  />}
{moviesError && <Text className="text-red-500">Error: {moviesError.message || 'An error occurred'}</Text>}
{movies && <Text className="text-white">Data: {JSON.stringify(movies)}</Text>} 

        </View>
      </ScrollView>
    </View>
  );
}
