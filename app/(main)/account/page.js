import UserAddressCard from "./_components/profile/UserAddressCard";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 grid-cols-2">
        <UserAddressCard address="" cardTitle="Billing Address" />
        <UserAddressCard address="" cardTitle="Shipping Address" />
      </div>
    </div>
  );
};

export default ProfilePage;
