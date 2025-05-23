import _ from "lodash";

import Card from "../Card/TWCard";
import PaginationBar from "./Pagination/TWPagninationBar";
import Divider from "../Ui/TWDivider";
import { cn } from "../../../utils/cn";
import { useEffect, useRef } from "react";

const List = ({
  loading = false,
  items = [],
  withCard = true,
  withPagination = true,
  className = "",
  listItemWrapperClassName = "",
  gap = 4,
  rowHeight = 24,
  headerHeight,
  footerHeight,
  rows = 10,
  pageSize = 10,
  pagination = {
    page: 0,
    totalPages: 0,
    next: null,
    previous: null,
    onPagination: () => null,
  },
  renderHeader = null,
  //eslint-disable-next-line no-unused-vars
  renderItem = (item, index) => null,
  //eslint-disable-next-line no-unused-vars
  renderLoadingItem = ({ index, rowHeight }) => null,
  renderHeaderItem = null,
  renderFooterItem = null,
  renderEmptyState = null,
  ...props
}) => {
  const loadingStarted = useRef(false);

  useEffect(() => {
    loadingStarted.current = loading;
    if (!loadingStarted.current) {
      setTimeout(() => {
        loadingStarted.current = true;
      }, 500);
    }
  }, []);

  pagination.next = !loading && pagination.next;
  pagination.previous = !loading && pagination.previous;
  let minHeight = rows * rowHeight;

  if (renderHeaderItem) {
    headerHeight = headerHeight || rowHeight;
    minHeight += headerHeight;
  }

  if (renderFooterItem) {
    footerHeight = footerHeight || rowHeight;
    minHeight += footerHeight;
  }

  if (gap) {
    const gapRows = items.length - 1;
    rows = renderHeaderItem ? gapRows + 1 : gapRows;
    rows = renderFooterItem ? gapRows + 1 : gapRows;
    minHeight += gap * gapRows;
  }

  const Wrapper = withCard
    ? Card
    : (props) => <div {...props}>{props.children}</div>;

  const listItemsClasses = cn(
    "relative py-6 px-4 box-content relative",
    {
      "flex flex-col": gap,
    },
    listItemWrapperClassName
  );

  return (
    <Wrapper className="p-0">
      {renderHeader && renderHeader()}
      {renderHeader && <Divider />}
      <div className={listItemsClasses} style={{ gap, minHeight }}>
        {!loading &&
          loadingStarted.current &&
          renderEmptyState &&
          typeof renderEmptyState === "function" &&
          items.length === 0 &&
          renderEmptyState()}
        {renderHeaderItem && renderHeaderItem()}
        {!loading && items.map((item, index) => renderItem(item, index))}
        {items.length < pageSize &&
          !loading &&
          _.times(pageSize - items.length, (index) => (
            <div key={index} style={{ height: rowHeight }}></div>
          ))}
        {loading &&
          _.times(pageSize, (index) => renderLoadingItem({ index, rowHeight }))}
        {renderFooterItem && renderFooterItem()}
      </div>
      {withPagination && <Divider />}
      {withPagination && (
        <div className="px-4 py-2">
          <PaginationBar {...pagination} />
        </div>
      )}
    </Wrapper>
  );
};

export default List;
