import { useEffect, useState } from "react";
import { database } from "../../fbconfig.js";
import { onValue, ref, set } from "firebase/database";
import { Box, Input, Table } from "@chakra-ui/react";
import { Button } from "./ui/button.tsx";
import { Field } from "./ui/field.tsx";

export default function Dictionary() {
  const [translations, setTranslations] = useState({});
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const dbRef = ref(database, "french");

    return onValue(dbRef, (snapshot) => {
      setTranslations(snapshot.toJSON());
    });
  }, []);

  const onAddTranslation = () => {
    set(ref(database, "french/" + key), value);
  };

  const onDeleteTranslation = (key) => {
    set(ref(database, "french/" + key), null);
  };

  return (
    <>
      <h1>Dictionary</h1>
      <Box>
        <Table.Root color="black">
          <Table.Body>
            {Object.entries(translations).map(([key, value]) => {
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
