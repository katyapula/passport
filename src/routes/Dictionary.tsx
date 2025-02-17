import { useEffect, useState } from "react";
import { database } from "../../fbconfig";
import { onValue, ref, remove, update } from "firebase/database";
import { Box, Input, Table } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

export default function Dictionary() {
  const [translations, setTranslations] = useState({});
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const dbRef = ref(database, "french");

    console.log("Setting up Firebase listener...");

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        console.log("onValue triggered! Snapshot exists:", snapshot.exists());
        console.log("Snapshot Data:", snapshot.val());

        const data = snapshot.val();
        setTranslations(data || {}); // ✅ Always set a valid object
      },
      (error) => {
        console.error("Firebase read error:", error);
      }
    );

    return () => {
      console.log("Unsubscribing from Firebase...");
      unsubscribe();
    };
  }, []);


  const onAddTranslation = () => {
    if (!key || !value) return;

    update(ref(database, "french/"), {
      [key]: value,
    });

    setKey("");
    setValue("");
  };

  const onDeleteTranslation = (key: string) => {
    remove(ref(database, `french/${key}`));
  };


  return (
    <>
      <h1>Dictionary</h1>
      <Box>
        <Table.Root color="black">
          <Table.Body>
            {translations && Object.entries(translations).map(([key, value]) => {
              return (
                <Table.Row key={key}>
                  <Table.Cell>{key}</Table.Cell>
                  <Table.Cell>{value}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => onDeleteTranslation(key)}>
                      Remove translation
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
        <Field orientation="horizontal" label="Key">
          <Input
            placeholder="Key"
            flex="1"
            name="key"
            onChange={(e) => setKey(e.target.value)}
            value={key}
          />
        </Field>
        <Field orientation="horizontal" label="Translation">
          <Input
            placeholder="Translation"
            flex="1"
            name="value"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Field>
        <Button onClick={onAddTranslation}>Add translation</Button>
      </Box>
    </>
  );
}
