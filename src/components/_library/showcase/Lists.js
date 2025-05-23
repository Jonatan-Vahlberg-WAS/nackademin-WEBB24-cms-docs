import _ from "lodash";
import { useEffect, useState } from "react";

import List from "../List/TWList";
import ListHeader from "../List/TWListHeader";
import ListItem from "../List/TWListItem";
import ListItemColumn from "../List/TWListItemColumn";
import LoadingSkeletonColumn from "../List/TWLoadingSkeletonColumn";
import Divider from "../Ui/TWDivider";
import PaginationBar from "../List/Pagination/TWPagninationBar";

const getDummyItems = (page = 1) =>
  _.times(10, (index) => {
    index = index + 1 + (page - 1) * 10;
    return {
      name: `Item ${index + (page - 1) * 10}`,
      description: `Description ${index}`,
      price: `$${index}.00`,
      quantity: index,
      total: `$${index * index}.00`,
    };
  });
const defaultColumns = "1fr 1fr 100px 80px 100px";
const dummyQueries = [
  { media: "max-width: 992px", columns: "1fr 1fr 100px 80px" },
  { media: "max-width: 768px", columns: "1fr 1fr 100px" },
  { media: "max-width: 598px", columns: "1fr 100px" },
];

const rightAlign = "justify-self-end text-end text-right";

const DummyListHeaderItem = () => {
  return (
    <ListItem
      defaultColumns={defaultColumns}
      queries={dummyQueries}
      className="font-bold"
    >
      <ListItemColumn>
        <p>Name</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[2].media}>
        <p>Description</p>
      </ListItemColumn>
      <ListItemColumn>
        <p className={rightAlign}>Price</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[1].media}>
        <p className={rightAlign}>Quantity</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[0].media}>
        <p className={rightAlign}>Total</p>
      </ListItemColumn>
    </ListItem>
  );
};

const DummyListItem = ({ item }) => {
  return (
    <ListItem defaultColumns={defaultColumns} queries={dummyQueries}>
      <ListItemColumn>
        <p>{item.name}</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[2].media}>
        <p>{item.description}</p>
      </ListItemColumn>
      <ListItemColumn>
        <p className={rightAlign}>{item.price}</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[1].media}>
        <p className={rightAlign}>{item.quantity}</p>
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[0].media}>
        <p className={rightAlign}>{item.total}</p>
      </ListItemColumn>
    </ListItem>
  );
};

const DummyFooterItem = ({ total }) => {
  return (
    <ListItem
      defaultColumns={defaultColumns}
      queries={dummyQueries}
      className="font-bold"
    >
      <ListItemColumn>
        <p>Total</p>
      </ListItemColumn>
      <ListItemColumn></ListItemColumn>
      <ListItemColumn query={dummyQueries[2].media}></ListItemColumn>
      <ListItemColumn query={dummyQueries[1].media}></ListItemColumn>
      <ListItemColumn query={dummyQueries[0].media}>
        <p className={rightAlign}>{`$${total}.00`}</p>
      </ListItemColumn>
    </ListItem>
  );
};

const DummyListLoadingItem = ({ rowHeight }) => {
  return (
    <ListItem defaultColumns={defaultColumns} queries={dummyQueries}>
      <LoadingSkeletonColumn dark blinking={false} rowHeight={rowHeight} />
      <ListItemColumn query={dummyQueries[2].media}>
        <LoadingSkeletonColumn rowHeight={rowHeight} />
      </ListItemColumn>
      <LoadingSkeletonColumn rowHeight={rowHeight} className={rightAlign} />
      <ListItemColumn query={dummyQueries[1].media}>
        <LoadingSkeletonColumn rowHeight={rowHeight} className={rightAlign} />
      </ListItemColumn>
      <ListItemColumn query={dummyQueries[0].media}>
        <LoadingSkeletonColumn rowHeight={rowHeight} className={rightAlign} />
      </ListItemColumn>
    </ListItem>
  );
};

const Lists = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [page]);

  const pagination = {
    page: page,
    totalPages: 10,
    next: page < 10 ? () => null : null,
    previous: page > 1 ? () => () => null : null,
    onPagination: (modifier) => setPage(page + modifier),
  };

  return (
    <div id="components-lists">
      <h2 className="text-xl font-bold mb-3">Lists</h2>
      <h3 className="text-lg font-bold">List with Pagination</h3>
      <List
        items={getDummyItems(page)}
        renderHeader={() => <ListHeader>test</ListHeader>}
        renderHeaderItem={() => <DummyListHeaderItem />}
        renderItem={(item, index) => <DummyListItem key={index} item={item} />}
        renderLoadingItem={({ rowHeight, index }) => (
          <DummyListLoadingItem key={index} rowHeight={rowHeight} />
        )}
        renderFooterItem={() => (
          <DummyFooterItem
            total={getDummyItems(page).reduce(
              (total, item) =>
                total +
                parseInt(item.total.replace("$", "").replace(".00", "")),
              0
            )}
          />
        )}
        withPagination
        pageSize={10}
        rowHeight={"24px"}
        pagination={pagination}
        loading={loading}
      />
      <h3 className="text-lg font-bold">List without Pagination or Card</h3>
      <List
        withCard={false}
        withPagination={false}
        items={getDummyItems()}
        renderHeader={() => <ListHeader>test</ListHeader>}
        renderHeaderItem={() => <DummyListHeaderItem />}
        renderItem={(item, index) => <DummyListItem key={index} item={item} />}
        renderLoadingItem={({ rowHeight, index }) => (
          <DummyListLoadingItem key={index} rowHeight={rowHeight} />
        )}
        pageSize={10}
        rowHeight={"24px"}
        loading={loading}
      />
      <h3 className="text-lg font-bold">Listitems</h3>
      <ListItem defaultColumns="1fr 1fr 1fr 1fr 1fr" className="font-bold">
        {_.times(5, (index) => (
          <ListItemColumn key={index}>
            <p>Responsive Header</p>
          </ListItemColumn>
        ))}
      </ListItem>
      {_.times(5, (index) => {
        const defaultColumns = _.times(5, () => "1fr").join(" ");
        return (
          <ListItem key={index} defaultColumns={defaultColumns}>
            {_.times(5 - index, (index) => (
              <ListItemColumn key={index}>
                <p>Responsive Column</p>
              </ListItemColumn>
            ))}
          </ListItem>
        );
      })}
      <ListItem defaultColumns="1fr 1fr 1fr 1fr 1fr" className="font-bold">
        {_.times(5, (index) => (
          <ListItemColumn key={index}>
            <p>Responsive Footer</p>
          </ListItemColumn>
        ))}
      </ListItem>
      <h3 className="text-lg font-bold">Loading Skeleton</h3>
      <ListItem defaultColumns="1fr 1fr 1fr 1fr 1fr" className="font-bold">
        {_.times(5, (index) => (
          <ListItemColumn key={index}>
            <LoadingSkeletonColumn dark={index === 0} blinking={index !== 0} />
          </ListItemColumn>
        ))}
      </ListItem>
      <h3 className="text-lg font-bold">Pagination</h3>
      <PaginationBar {...pagination} />
      <Divider darker className="my-4" />
    </div>
  );
};

export default Lists;
