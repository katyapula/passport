import {PersonState} from "../app/slices/passportSlice.ts";
import PassportItem from "./PassportItem.tsx";

type PassportListProps = {
  data: PersonState[]
};

export default function PassportList({data}: PassportListProps) {
 return (
   data.map(person => <div key={person.id}><PassportItem person={person} /></div>)
 );
};