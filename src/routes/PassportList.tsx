import PassportItem from "./PassportItem.tsx";
import {useGetMockedByNameQuery} from "@/app/data";

export default function PassportList() {
  const { data, error, isLoading } = useGetMockedByNameQuery('passport');

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: '

  return data?.map((person) => (
    <div key={person.id}>
      <PassportItem person={person} />
    </div>
  ));
}
