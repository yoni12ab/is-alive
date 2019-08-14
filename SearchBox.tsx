import React, {useState} from 'react';
import { SearchBar, ThemeProvider } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';




export default class SearchBox extends React.Component {
  state = {
    searchTerm: '',
  };
 
  updateSearch = searchTerm => {
    this.setState({ searchTerm });
    
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={searchTerm}
      />
    );
  }
}

// export default function SearchBox(){
   
//     const [searchTerm, setSearchTerm] = useState("");
      
      
//       return (
//         <View>
//         <SearchBar
//           placeholder="Type Here..."
         
//           value={searchTerm}
//         />
//         </View>
//       );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     }
// });