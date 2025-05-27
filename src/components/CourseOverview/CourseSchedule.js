import Table from "../_library/Table/TWTable";
import courseDetails from "../../../courseDetails";

const CourseSchedule = () => {

    const schedule = courseDetails.schedule;

    const columns = "80px 80px 1fr";

    return (
        <Table.Table className="text-left">
            <Table.Header columns={columns}>
                <Table.HeaderCell>Vecka</Table.HeaderCell>
                <Table.HeaderCell>Datum</Table.HeaderCell>
                <Table.HeaderCell>Innehåll</Table.HeaderCell>
            </Table.Header>
            {schedule.map(item => (
                <Table.Row key={`${item.week}-${item.date}`} columns={columns}>
                    <Table.Cell>
                        {`${item.week}`}
                    </Table.Cell>
                    <Table.Cell>
                        {`${item.date}`}
                    </Table.Cell>
                    <Table.Cell>
                        {`${item.content}`}
                    </Table.Cell>
                </Table.Row>
            )) }
        </Table.Table>
    );
};

export default CourseSchedule;