import { data } from "../data/activityData.js";

export default function ActivityFeed() {
  const {
    activityData,
    arrRef,
    organConfigs,
    daysName,
    heightDiff,
    maxVal,
    barColors,
  } = data;
  return (
    <section className='activity-feed'>
      <div className='activity-title-wrapper'>
        <h3 className='activity-title'>Activity</h3>
        <p className='activity-description'>3 appointments on this week</p>
      </div>
      <div className='activity-graph'>
        {activityData.map((day, index) => (
          <div className='day-group' key={index}>
            <div className='bar-group'>
              {day.values.map((val, i) => {
                const barHeight = (val / maxVal) * 100;

                // Calculate each organ overlay height and accumulate for stacking
                const overlays = [];
                let cumulativeHeight = 0;

                for (const organ of organConfigs) {
                  const organVal = organ.data[index].values[i];
                  if (organVal > 0) {
                    const organHeight = (organVal / arrRef[i]) * 100;
                    overlays.push({
                      height: organHeight,
                      bottom: cumulativeHeight,
                      color: organ.color,
                    });
                    cumulativeHeight += organHeight;
                  }
                }

                return (
                  <div
                    key={i}
                    className='bar'
                    style={{
                      position: "relative",
                      height: `${barHeight}%`,
                      backgroundColor: barColors[i],
                      // marginBottom : `${heightDiff[i]}`
                      transform: `translateY(-${heightDiff[i]})`,
                    }}
                  >
                    {overlays.map((overlay, idx) => (
                      <div
                        key={idx}
                        style={{
                          position: "absolute",
                          bottom: `${overlay.bottom}%`,
                          height: `${overlay.height}%`,
                          width: "100%",
                          backgroundColor: overlay.color,
                          borderRadius: "2px",
                        }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className='ac-days'>
        {daysName.map((d) => (
          <span key={d} className='day-label'>
            {d}
          </span>
        ))}
      </div>
    </section>
  );
}
