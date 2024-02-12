import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={'light' as ToasterProps['theme']}
      className="sweet-home-toaster"
      position="top-right"
      richColors={true}
      {...props}
    />
  );
};

export { Toaster };
