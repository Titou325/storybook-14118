import React from "react"
import * as styles from "./text-skeleton.module.scss"

interface ITextSkeletonProps extends React.HTMLAttributes<Element> {
  lines?: number;
}

export default class TextSkeleton extends React.Component<
  ITextSkeletonProps,
  {}
> {
  static defaultProps = {
    lines: 0
  };

  getLineWidth = (index) => {
    if (index === this.props.lines - 1 || (index + 1) % 5 === 0) {
      return "75%"
    } else {
      return "100%"
    }
  };

  render() {
    return (
      <>
        {this.props.lines === 0 ? (
          <span
            className={[
              styles["textSkeletonLine"],
              styles["textSkeletonLine_inline"]
            ].join(" ")}
          >
            <span aria-hidden="true">Skeleton text</span>
          </span>
        ) : (
          undefined
        )}
        {this.props.lines > 0 ? (
          <div className={styles["textSkeleton"]}>
            {[...Array(this.props.lines).keys()].map((index) => {
              return (
                <>
                  <div
                    className={[
                      styles["textSkeletonLine"],
                      styles["textSkeletonLine_block"]
                    ].join(" ")}
                    style={{
                      width: this.getLineWidth(index)
                    }}
                  ></div>
                </>
              )
            })}
          </div>
        ) : (
          undefined
        )}
      </>
    )
  }
}
