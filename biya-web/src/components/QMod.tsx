export default function QMod({
  tool,
  params,
  datatracked,
}: {
  tool: string;
  params: string;
  datatracked: boolean;
}) {
  return (
    <div
      data-qmod-tool={tool}
      data-qmod-params={params}
      className="qtool"
      data-qmod-tracked={datatracked}
    ></div>
  );
}
