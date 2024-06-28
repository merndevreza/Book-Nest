import { Headphones, Mail, MapPin } from "lucide-react";

const ContactInfoWidget = ({className}) => {
   return (
      <div className={className}>
        <div className="flex gap-3">
          <Headphones className="text-themePrimary" size={24} />
          <span>
            <strong>Support:</strong> +8801780572272
          </span>
        </div>
        <div className="flex gap-3">
          <Mail className="text-themePrimary" size={24} />
          <span>
            <strong>Email:</strong> rezaulkarimpstu@gmail.com
          </span>
        </div>
         <div className="flex gap-3">
          <MapPin className="text-themePrimary" size={24} />
          <span>
            {" "}
            <strong>Address:</strong> Khilkhet, Dhaka, Bangladesh.
          </span>
        </div>
      </div>
   );
};

export default ContactInfoWidget;