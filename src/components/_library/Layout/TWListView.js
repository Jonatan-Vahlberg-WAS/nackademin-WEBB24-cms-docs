import { cn } from "../../../utils/cn";

import Layout from "./TWLayout";
import MainContainer from "./TWMainContainer";

const ListView = ({ children, layoutProps = {}, wrapperProps = {} }) => {
  return (
    <Layout
      style={{
        minHeight: "calc(100vh - 56px)",
      }}
      {...layoutProps}
    >
      <MainContainer>
        <div
          className={cn(
            "min-h-full h-full mx-4 lg:!mx-0",
            wrapperProps.className || "" // Merge any custom classes passed
          )}
          {...wrapperProps}
        >
          {children}
        </div>
      </MainContainer>
    </Layout>
  );
};

export default ListView;
