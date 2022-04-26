import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  SectionList,
  LogBox,
} from "react-native";
LogBox.ignoreAllLogs();
import { Calendar } from "react-native-calendars";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@rneui/themed";
const screenWidth = Dimensions.get("window").width;
export default function App() {
  const [days, setdays] = useState({});
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [search, setsearch] = useState("");
  const [click, setclick] = useState(0);
  const DATA = [
    {
      title: "Food",
      data: ["Bananas", "Sugar", "Tuna"],
    },
    {
      title: "Technology",
      data: ["Polystation"],
    },
  ];
  useEffect(() => {
    var listDate = [];
    var startDate = moment().format("YYYY-MM-DD");
    var endDate = moment().add(6, "days").format("YYYY-MM-DD");
    setstart(startDate);
    setend(endDate);
    var dateMove = new Date(startDate);
    var strDate = startDate;

    while (strDate < endDate) {
      var strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }

    var result = listDate.reduce((a, c, index) => {
      a[c] = {
        startingDay: index === 0 ? true : false,
        color: "#3975FF",
        textColor: "white",
        endingDay: index === listDate.length - 1 ? true : false,
      };
      return a;
    }, {});

    setdays(result);
  });

  const onclickpress = () => {
    setclick(click + 1);
  };
  const onprev = () => {
    var listDate = [];
    var startDate = moment(start).subtract(6, "days").format("YYYY-MM-DD");
    var endDate = moment(startDate).add(6, "days").format("YYYY-MM-DD");
    setstart(startDate);
    setend(endDate);
    var dateMove = new Date(startDate);
    var strDate = startDate;
    while (strDate < endDate) {
      var strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }
    var result = listDate.reduce((a, c, index) => {
      a[c] = {
        startingDay: index === 0 ? true : false,
        color: "#50cebb",
        textColor: "white",
        endingDay: index === listDate.length - 1 ? true : false,
      };
      return a;
    }, {});
    setdays(result);
  };

  const onNext = () => {
    var listDate = [];
    var startDate = moment(start).add(6, "days").format("YYYY-MM-DD");
    var endDate = moment(startDate).add(6, "days").format("YYYY-MM-DD");
    setstart(startDate);
    setend(endDate);
    var dateMove = new Date(startDate);
    var strDate = startDate;
    while (strDate < endDate) {
      var strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }
    var result = listDate.reduce((a, c, index) => {
      a[c] = {
        startingDay: index === 0 ? true : false,
        color: "#50cebb",
        textColor: "white",
        endingDay: index === listDate.length - 1 ? true : false,
      };
      return a;
    }, {});
    setdays(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <Text style={styles.headtext}>Click test</Text>
            <TouchableOpacity
              style={styles.clickmebtn}
              onPress={() => onclickpress}
            >
              <Text style={[styles.headtext, { color: "white" }]}>
                Click me
              </Text>
            </TouchableOpacity>
            <View style={styles.nocmainview}>
              <View style={styles.coloview}></View>
              <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={styles.nochead}>Number of button clicks</Text>
                <Text style={styles.clicknum}>{click}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.headtext}>Search test</Text>
            <View>
              <TextInput
                style={styles.TextInput}
                placeholder="Search"
                placeholderTextColor="#C2C2C2"
                value={search}
                onChangeText={(text) => setsearch(text)}
              />
              <Image
                source={require("./images/Icon.png")}
                style={styles.searchicon}
              />
            </View>
            <View style={styles.nocmainview}>
              <View style={styles.coloview}></View>
              <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={styles.nochead}>Searched text</Text>
                <Text style={styles.clicknum}>text</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.headtext}>Message test</Text>
            <View style={styles.msgview}>
              <View style={{ width: screenWidth / 1.8 }}>
                <Text style={styles.msgfirsttxt}>
                  This is an empty state, to be used for messages and/or blog
                  articles.
                </Text>

                <Text style={styles.msgsectxt}>
                  Four lines to describe the message/article to be highlighted.
                  The text is accompanied by an illustration in the top
                  right-hand corner.
                </Text>
              </View>
              <Image
                source={require("./images/msg.png")}
                style={styles.msgicon}
              />
              <View style={styles.msgbtnview}>
                <TouchableOpacity>
                  <Text style={styles.nnbtn}>Not now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.smbtn}>
                  <Text style={styles.smbtntxt}>See message</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.headtext}>List test</Text>
            <View style={styles.listmainview}>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <View style={{ marginVertical: 10 }}>
                    <View style={styles.renderview}>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <View style={styles.coloview}></View>
                        <View style={{ marginLeft: 10, marginTop: 10 }}>
                          <Text style={styles.title}>{item}</Text>
                          <Text
                            style={[
                              styles.clicknum,
                              {
                                fontWeight: "500",
                                marginTop: 5,
                              },
                            ]}
                          >
                            Grocery Ape
                          </Text>
                        </View>
                      </View>
                      <Text style={[styles.nochead, { alignSelf: "center" }]}>
                        2 kg
                      </Text>
                    </View>
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={styles.header}>{title}</Text>
                )}
              />
            </View>
          </View>
          <Calendar markingType={"period"} markedDates={days} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 16,
            }}
          >
            <Button
              title="Previous week"
              buttonStyle={styles.btn}
              containerStyle={styles.cont}
              titleStyle={styles.titlee}
              onPress={() => onprev()}
            />
            <Button
              title="Next week"
              buttonStyle={styles.btn}
              containerStyle={styles.cont}
              titleStyle={styles.titlee}
              onPress={() => onNext()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#ff9f6f",
    height: 55,
    borderRadius: 8,
  },
  cont: {
    width: "48%",
    marginVertical: 30,
  },
  titlee: {
    color: "white",
  },
  headtext: {
    color: "#777777",
    fontSize: 16,
    fontWeight: "600",
    margin: 15,
  },
  clickmebtn: {
    backgroundColor: "#ff9f6f",
    width: screenWidth / 1.1,
    alignSelf: "center",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  nocmainview: {
    height: 80,
    width: screenWidth / 1.1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 8,
    marginTop: 20,
    flexDirection: "row",
    padding: 15,
  },
  coloview: {
    height: 50,
    width: 50,
    backgroundColor: "#e4e4e5",
    borderRadius: 10,
  },
  nochead: {
    color: "#414141",
    fontSize: 14,
    fontWeight: "500",

    marginBottom: 5,
  },
  clicknum: {
    color: "#bababa",
    fontSize: 14,
    fontWeight: "600",
  },
  msgview: {
    height: 260,
    width: screenWidth / 1.1,
    alignSelf: "center",
    backgroundColor: "#EAFFC9",
    borderRadius: 8,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
  },
  msgfirsttxt: {
    color: "#4A4A4A",
    fontSize: 15,
    fontWeight: "600",
  },
  msgsectxt: {
    color: "#7D7D7D",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 15,
  },
  msgicon: {
    height: 110,
    width: 110,
    resizeMode: "contain",
    top: 20,
  },
  msgbtnview: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    right: 15,
    alignItems: "center",
  },
  nnbtn: {
    color: "#B4EDA0",
    fontWeight: "600",
    fontSize: 16,
  },
  smbtn: {
    height: 36,
    width: 120,
    backgroundColor: "#B4EDA0",
    justifyContent: "center",
    borderRadius: 6,
    marginLeft: 15,
    alignItems: "center",
  },
  smbtntxt: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 12,
  },
  TextInput: {
    height: 40,
    width: screenWidth / 1.1,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#f3f3f3",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "600",
    color: "#C2C2C2",
    paddingLeft: 35,
  },
  searchicon: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    position: "absolute",
    left: 25,
    top: 9,
    alignSelf: "center",
  },
  item: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: "#CDCDCD33",
  },
  header: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "500",
  },
  title: {
    fontSize: 14,
    color: "#4A4A4A",
    fontWeight: "600",
  },
  listmainview: {
    minHeight: 50,
    width: screenWidth / 1.12,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    padding: 15,
    marginBottom: 15,
  },
  renderview: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: "#CDCDCD33",
    paddingBottom: 10,
  },
});
