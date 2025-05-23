import { cn } from "@/utils/cn";

import T from "@/library/UI/TWTypography";
import Card from "@/library/Card/TWCard";
export const ListEmptyStateWrapper = ({ children }) => {
  const emptyStateContainerClasses = cn(
    "absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center h-full w-full"
  );
  return <div className={emptyStateContainerClasses}>{children}</div>;
};

const ListEmptyState = ({ children, title, description }) => {
  return (
    <ListEmptyStateWrapper>
      <Card className="bg-gray-50">
        {title && <T.Title>{title}</T.Title>}
        {description && (
          <T.Text className={children ? "mb-4" : "mb-0"}>{description}</T.Text>
        )}
        {children && children}
      </Card>
    </ListEmptyStateWrapper>
  );
};

export default ListEmptyState;
