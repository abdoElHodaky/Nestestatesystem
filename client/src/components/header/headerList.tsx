import { Button } from "antd";
import { memo } from "react";

function HeaderList({
  titleButton,
  onClick,
}: {
  onClick: () => void;
  titleButton: string;
}) {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "flex-end",
        }}
        className="p-4"
      >
        <Button type="primary" onClick={onClick}>
          {titleButton}
        </Button>
      </div>
    </>
  );
}

export default memo(HeaderList);
