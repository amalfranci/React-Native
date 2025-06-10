import { Text, View,FlatList } from "react-native";
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'sixth Item',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'eight Item',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'nineth Item',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Tenenth Item',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d89',
    title: 'eleventh Item',
  },
];


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View className="bg-red-300 p-6 m-4 rounded-md  ">
    <Text className="text-5xl font-bold text-center " >{title}</Text>
  </View>
);

export default function Index() {
  return (
   <SafeAreaProvider>
    <SafeAreaView className="flex-1 justify-center items-center bg-slate-400" >
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
