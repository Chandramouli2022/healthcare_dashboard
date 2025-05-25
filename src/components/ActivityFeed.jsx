export default function ActivityFeed() {
  const activityData = [
    { day: "Mon", values: [10, 5, 4, 3] },
    { day: "Tue", values: [10, 5, 4, 3] },
    { day: "Wed", values: [10, 5, 4, 3] },
    { day: "Thu", values: [10, 5, 4, 3] },
    { day: "Fri", values: [10, 5, 4, 3] },
    { day: "Sat", values: [10, 5, 4, 3] },
    { day: "Sun", values: [10, 5, 4, 3] },
  ];
  const arrRef = [10, 5, 4, 3];
  const heartData = [
    { day: "Mon", values: [5, 2, 0, 0] },
    { day: "Tue", values: [0, 0, 0, 1] },
    { day: "Wed", values: [0, 0, 0, 0] },
    { day: "Thu", values: [0, 3, 0, 0] },
    { day: "Fri", values: [0, 1, 0, 0] },
    { day: "Sat", values: [0, 0, 0, 0] },
    { day: "Sun", values: [0, 0, 2, 0] },
  ];

  const LegData = [
    { day: "Mon", values: [5, 3, 0, 0] },
    { day: "Tue", values: [0, 0, 0, 0] },
    { day: "Wed", values: [4, 0, 0, 0] },
    { day: "Thu", values: [0, 2, 0, 0] },
    { day: "Fri", values: [0, 4, 0, 0] },
    { day: "Sat", values: [0, 0, 0, 0] },
    { day: "Sun", values: [0, 0, 0, 3] },
  ];

  const organConfigs = [
    { name: "heart", data: heartData, color: "lightgreen" },
    { name: "leg", data: LegData, color: "darkblue" },
    {
      name: "lungs",
      data: typeof lungsData !== "undefined" ? lungsData : null,
      color: "green",
    },
    {
      name: "brain",
      data: typeof brainData !== "undefined" ? brainData : null,
      color: "purple",
    },
  ].filter((organ) => organ.data);

  const heightDiff = ["0px", "20px", "15px", "5px"];
  const maxVal = Math.max(...activityData.flatMap((day) => day.values));
  const barColors = ["#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3"];

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
            <span className='day-label'>{day.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
