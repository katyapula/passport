import { PersonState } from "@/app/slices/passportSlice";

type PassportItemProps = {
  person: PersonState;
};

export default function PassportItem({ person }: PassportItemProps) {
  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{person.city}</td>
          </tr>
          <tr>
            <th>Street</th>
            <td>{person.street}</td>
          </tr>
          <tr>
            <th>Building</th>
            <td>{person.buildingNumber}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{person.company}</td>
          </tr>
        </tbody>
      </table>
      <div className="actions">
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
