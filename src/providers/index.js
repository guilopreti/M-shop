import { AuthProvider } from "./auth";
import { AdvertisemenstProvider } from "./advertisements";
import { AdFilterProvider } from "./adFilter";
import { RegisterProvider } from "./register";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AdvertisemenstProvider>
        <RegisterProvider>
          <AdFilterProvider>{children}</AdFilterProvider>
        </RegisterProvider>
      </AdvertisemenstProvider>
    </AuthProvider>
  );
};

export default Providers;
