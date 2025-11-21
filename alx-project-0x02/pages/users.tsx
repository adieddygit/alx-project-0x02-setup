import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({users})=> {
    return (
        <div>
            <Header title="User Page"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
{users.map((user: UserProps) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.name}
      username={user.username}
      email={user.email}
      address={{
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
        },
      }}
      phone={user.phone}
      website={user.website}
      company={{
        name: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs,
      }}
    />
  ))}
</div>
      
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  const users = data.slice(0, 10).map((user: UserProps) => ({
  id: user.id,
  name: user.name,
  username: user.username,
  email: user.email,
  phone: user.phone,
  website: user.website,
  address: user.address,
  company: user.company,
}));
  return {
    props: {
      users,
    },
  };
}

export default Users;