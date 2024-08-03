interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <div className="animate-fade relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md border-zinc-500 border-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
