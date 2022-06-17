type TimeElapsedProps = {
  jobName: string;
  seconds: number;
};

export default function TimeElapsed({ jobName, seconds }: TimeElapsedProps) {
  return jobName ? (
    <p>
      You have spent {seconds} seconds on &quot;{jobName}&quot;!
    </p>
  ) : (
    <p>You have spent {seconds} seconds on this job!</p>
  );
}
