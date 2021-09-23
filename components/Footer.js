const Footer = ({ profile }) => {
  return (
    <footer className="bg-dark text-light text-center animate__animated animate__fadeInUp">
      <div className="container p-2">
        <div>🦄Copyright &copy; {new Date().getFullYear()} {profile ? profile.name : 'Elliot Garamendi'}. All rights reserved.🦄</div>
      </div>
    </footer>
  );
}

export default Footer;