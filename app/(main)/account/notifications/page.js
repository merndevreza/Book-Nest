import NotificationCard from "./_components/NotificationCard";

const notifications=[
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
   {
      id:crypto.randomUUID(),
      title:"Order Status Updated",
      details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae architecto voluptatem officia dicta eius tenetur id quod ut? Dolorum praesentium ea atque molestiae ipsum, error illum est. Beatae, natus!",
      href:"#"
   },
]
const NotificationsPage = () => {
   return (
      <div className="space-y-3">
         {notifications.map(notification=><NotificationCard key={notification.id} notification={notification}/>)}
      </div>
   );
};

export default NotificationsPage;