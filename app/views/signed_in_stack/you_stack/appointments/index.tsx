import React, { useEffect, useState, type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukButton from "../../../../components/button/default";
import { navigate } from "../../../../navigation/RootNavigation";
import { Platform, View, Switch } from "react-native";
import BlockList from "../../../../components/button/block_list";
import { itemStyle } from "../../../../components/home_block/styles";
import GovukText from "../../../../components/text/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Calendar from "expo-calendar";
import LinkText from "../../../../components/text/link";

export const KEY_CALENDAR_TOGGLE = "KEY_CALENDAR_TOGGLE";
export const KEY_CALENDAR_ID = "KEY_CALENDAR_ID";

const eventDetails = {
  title: "Work Search Review at Pudsey Jobcentre",
  startDate: new Date("2023-08-11 10:00"),
  endDate: new Date("2023-08-11 10:10"),
  location: "Century House, Church Ln, Pudsey LS28 7RQ",
  notes: "With work coach George Smith",
};

async function getDefaultCalendarSource(): Promise<Calendar.Source> {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function addToCalendar(
  calendarId: string,
  event: Partial<Calendar.Event>
): Promise<string> {
  const eventIdInCalendar = await Calendar.createEventAsync(calendarId, event);
  return eventIdInCalendar;
}

const AppointmentsPage = (): ReactElement => {
  useEffect(() => {
    void (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const storedCalendarId: string | null = await readData(KEY_CALENDAR_ID);
        setCalendarId(storedCalendarId);
      }
    })();
  }, []);

  useEffect(() => {
    void (async () => {
      const result = await readData(KEY_CALENDAR_TOGGLE);
      if (result === "true") {
        setCalendarSwitchValue(true);
      }
    })();
  }, []);

  const storeData = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Saved", key, value);
    } catch (e) {
      console.log("Error saving data");
    }
  };

  const readData = async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.log("Error reading data");
      return null;
    }
  };

  const removeData = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Removed", key);
    } catch (e) {
      console.log("Error removing data");
    }
  };

  const toggleCalendarSwitchValue = async (value: boolean): Promise<void> => {
    setCalendarSwitchValue(value);
    await storeData(KEY_CALENDAR_TOGGLE, String(value));
    console.log(
      "Toggle set to",
      value,
      "state",
      calendarSwitchValue,
      "stored",
      await readData(KEY_CALENDAR_TOGGLE)
    );
    if (value) {
      if (calendarId != null) {
        await deleteCalendar();
        const createdCalendarId = await createCalendar();
        await addToCalendar(createdCalendarId, eventDetails);
      } else {
        const createdCalendarId = await createCalendar();
        await addToCalendar(createdCalendarId, eventDetails);
      }
    } else {
      await deleteCalendar();
    }
  };

  const [calendarSwitchValue, setCalendarSwitchValue] = useState(false);
  const [calendarId, setCalendarId] = useState<string | null>(null);

  async function createCalendar(): Promise<string> {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : {
            isLocalAccount: true,
            name: "Universal Credit Calendar",
            id: undefined,
            type: "LOCAL",
          };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Universal Credit Appointments",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    setCalendarId(newCalendarID);
    await storeData(KEY_CALENDAR_ID, newCalendarID);
    console.log("Created calendar", newCalendarID);
    return newCalendarID;
  }

  async function deleteCalendar(): Promise<void> {
    if (calendarId != null) {
      setCalendarId(null);
      await removeData(KEY_CALENDAR_ID);
      await Calendar.deleteCalendarAsync(calendarId);
      console.log("Deleted calendar");
    }
  }
  return (
    <Page
      content={[
        <LinkText
          key={0}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "You",
              params: {
                screen: "You Page",
              },
            });
          }}
        ></LinkText>,
        <GovukH2 text="Your appointments" key={1} />,
        <GovukButton
          content={"View latest appointment"}
          onPress={() => {
            navigate("SignIn", {
              screen: "You",
              params: {
                screen: "Appointments",
                params: { screen: "Your Latest Appointment" },
              },
            });
          }}
          key={2}
        ></GovukButton>,
        <BlockList
          contents={[
            <View style={itemStyle.itemContainer} key={1}>
              <GovukText
                text={"Add a calendar to your phone with your appointments"}
                additionalStyle={[itemStyle.text]}
                key={2}
              />
              <Switch
                style={itemStyle.icon}
                onValueChange={toggleCalendarSwitchValue}
                value={calendarSwitchValue}
                key={1}
              />
            </View>,
          ]}
          onPress={() => {}}
          key={3}
        />,
      ]}
    />
  );
};

export default AppointmentsPage;
