import { Box, Typography } from "@mui/material";

export function EnhancedLineChart({
  data,
  title,
  labels,
  yAxisLabel,
}: {
  data: number[];
  title: string;
  labels: string[];
  yAxisLabel: string;
}) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  const padding = range * 0.1;
  const adjustedMax = maxValue + padding;
  const adjustedMin = Math.max(0, minValue - padding);
  const adjustedRange = adjustedMax - adjustedMin;

  const yAxisSteps = 5;
  const yAxisLabels = [];
  for (let i = 0; i <= yAxisSteps; i++) {
    const value = adjustedMin + (adjustedRange * i) / yAxisSteps;
    yAxisLabels.push(Math.round(value));
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "white", fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          height: { xs: 250, sm: 320 },
          backgroundColor: "#030617",
          borderRadius: 2,
          p: { xs: 2, sm: 3 },
          border: "1px solid rgba(169, 154, 225, 0.1)",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 300">
          {yAxisLabels.map((_, index) => (
            <line
              key={index}
              x1="50"
              y1={250 - index * 40}
              x2="370"
              y2={250 - index * 40}
              stroke="rgba(169, 154, 225, 0.1)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          ))}

          <line
            x1="50"
            y1="50"
            x2="50"
            y2="250"
            stroke="#a99ae1"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="250"
            x2="370"
            y2="250"
            stroke="#a99ae1"
            strokeWidth="2"
          />

          {yAxisLabels.map((label, index) => (
            <text
              key={index}
              x="40"
              y={255 - index * 40}
              fill="#a99ae1"
              fontSize="12"
              textAnchor="end"
            >
              {yAxisLabel === "$"
                ? `$${(label / 1000).toFixed(0)}k`
                : label.toLocaleString()}
            </text>
          ))}

          {labels.map((label, index) => (
            <text
              key={index}
              x={60 + index * (300 / (labels.length - 1))}
              y="270"
              fill="#a99ae1"
              fontSize="10"
              textAnchor="middle"
            >
              {label}
            </text>
          ))}

          <polyline
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            points={data
              .map((value, index) => {
                const x = 60 + index * (300 / (data.length - 1));
                const y = 250 - ((value - adjustedMin) / adjustedRange) * 200;
                return `${x},${y}`;
              })
              .join(" ")}
          />

          {data.map((value, index) => {
            const x = 60 + index * (300 / (data.length - 1));
            const y = 250 - ((value - adjustedMin) / adjustedRange) * 200;
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#a855f7"
                  stroke="#0f172a"
                  strokeWidth="2"
                />
                <text
                  x={x}
                  y={y - 10}
                  fill="#ffffff"
                  fontSize="10"
                  textAnchor="middle"
                  style={{ opacity: 0 }}
                  className="hover:opacity-100"
                >
                  {yAxisLabel === "$"
                    ? `$${(value / 1000).toFixed(0)}k`
                    : value.toLocaleString()}
                </text>
              </g>
            );
          })}
        </svg>
      </Box>
    </Box>
  );
}

export function EnhancedPieChart({
  data,
  title,
}: {
  data: { label: string; value: number; color: string }[];
  title: string;
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const createPath = (
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      centerX,
      centerY,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "white", fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box sx={{ width: { xs: 150, sm: 192 }, height: { xs: 150, sm: 192 } }}>
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const angle = (percentage / 100) * 360;
              const endAngle = currentAngle + angle;

              const path = createPath(100, 100, 80, currentAngle, endAngle);
              const labelAngle = currentAngle + angle / 2;
              const labelRadius = 60;
              const labelPos = polarToCartesian(
                100,
                100,
                labelRadius,
                labelAngle
              );

              currentAngle = endAngle;

              return (
                <g key={index}>
                  <path
                    d={path}
                    fill={item.color}
                    style={{ cursor: "pointer" }}
                    opacity={0.9}
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    fill="white"
                    fontSize="12"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    {percentage.toFixed(0)}%
                  </text>
                </g>
              );
            })}
          </svg>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                }}
              />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: 500 }}
                >
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ color: "#a99ae1" }}>
                  {item.value} ({((item.value / total) * 100).toFixed(1)}%)
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
