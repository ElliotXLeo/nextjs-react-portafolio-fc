const Footer = ({ profile }) => {
  return (
    <footer className="bg-dark text-light text-center">
      <div className="container p-2">
        <div>🦄Copyright &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.🦄</div>
      </div>
    </footer>
  );
}

export default Footer;