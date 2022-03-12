import { Col, Card, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactCardFlip from "react-card-flip";
import {
  flipCard,
  setMemories,
  addOpenedItems,
  clearOpenedItems,
  flipAllCard,
  setScore,
  addScore,
  subtractScore,
  setCanFlip,
  setCanFlipAll,
  getFlippedCount,
} from "../redux/memorySlice";

var tempArr = [];

function Item() {
  const dispatch = useDispatch();
  const memory = useSelector((state) => state.memory.items);
  const openedCount = useSelector((state) => state.memory.openedItems.length);
  const openedItems = useSelector((state) => state.memory.openedItems);
  const flippedCount = useSelector(getFlippedCount);

  const handleClick = (id) => {
    dispatch(flipCard(id));
    if (openedCount !== 2) {
      dispatch(addOpenedItems(id));
    }
  };

  const checkIfMatch = () => {
    if (openedItems[0] && openedItems[1]) {
      if (openedItems[0].title === openedItems[1].title) {
        console.log("match");
        dispatch(addScore(50));
        dispatch(setCanFlip(openedItems[0].id));
        dispatch(setCanFlip(openedItems[1].id));
        dispatch(clearOpenedItems());
      } else {
        console.log("not match");
        dispatch(subtractScore(10));
        dispatch(flipCard(openedItems[0].id));
        dispatch(flipCard(openedItems[1].id));
        dispatch(clearOpenedItems());
      }
    }
  };

  const restartGame = () => {
    tempArr = [];
    tempArr = memory
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch(setMemories(tempArr));
    dispatch(flipAllCard());
    dispatch(setCanFlipAll());
    dispatch(setScore(50));
  };

  useEffect(() => {
    if (openedCount === 2) {
      setTimeout(() => {
        checkIfMatch();
      }, 750);
    }
  }, [openedCount]);

  useEffect(() => {
    tempArr = memory
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch(setMemories(tempArr));
  }, []);

  return (
    <>
      {memory.map((item) => (
        <ReactCardFlip
          key={item.id}
          isFlipped={item.isFlipped}
          flipDirection="horizontal"
        >
          <Card
            onClick={openedCount <= 1 ? () => handleClick(item.id) : null}
            style={{
              borderRadius: "10px",
              backgroundColor: "#F4F4F6",
              boxShadow: "2px 2px 2px rgba(158,158,158,0.4)",
              cursor: "pointer",
            }}
          >
            <Col span={4}>
              <div
                className="front"
                style={{ height: "100px", width: "100px" }}
              >
                ?
              </div>
            </Col>
          </Card>

          <Card
            style={{
              borderRadius: "10px",
              backgroundColor: "#F4F4F6",
              boxShadow: "2px 2px 2px rgba(158,158,158,0.4)",
              cursor: "pointer",
              opacity: item.canFlip ? 1 : 0.5,
            }}
          >
            <Col span={4}>
              <img src={item.img} />
            </Col>
          </Card>
        </ReactCardFlip>
      ))}
      {flippedCount === 30 && (
        <Col span={24}>
          <Button
            onClick={restartGame}
            style={{ width: "100px", marginTop: "10px" }}
            type="primary"
          >
            Restart
          </Button>
        </Col>
      )}
    </>
  );
}

export default Item;
