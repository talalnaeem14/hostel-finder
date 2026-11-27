import Button from "@/components/Button";

interface ConfirmationModalProps {
  open: boolean;
  name: string;
  hostelName: string;
  date: string;
  onClose: () => void;
}

export default function ConfirmationModal({
  open,
  name,
  hostelName,
  date,
  onClose,
}: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <h2 className="mt-4 text-xl font-bold">Visit request sent</h2>
        <p className="mt-2 text-slate-600">
          Thanks {name}! Your request to visit <strong>{hostelName}</strong> on{" "}
          <strong>{date}</strong> has been received. The hostel will contact you soon.
        </p>
        <div className="mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}