import 'bootstrap/dist/css/bootstrap.css';

const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function About(){
    return (
       
        <div className="min-vh-100 bg-dark p-4 text-white text-center">
          
          <h2>Lorem Ipsum?</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem ac rhoncus vehicula. Vivamus vel ipsum malesuada lacus fringilla aliquet eget sed orci. Nullam non tortor dolor. Nullam orci ipsum, rhoncus ut sodales sed, aliquam ut libero. Etiam dictum a diam sit amet blandit. Aenean id neque semper, dictum elit ultrices, posuere purus. Suspendisse tempus dolor vel risus iaculis suscipit. Curabitur eu dolor gravida risus porta consequat ut id dolor. Cras eget nisl ut est facilisis molestie. Praesent eget commodo urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer id dui nisl. Nulla scelerisque tellus ante, vel hendrerit nibh pharetra gravida. Pellentesque tempor porttitor nibh, id tempus leo luctus non. Ut vel ultrices massa. Suspendisse consectetur ac arcu rutrum efficitur. Vestibulum vehicula est vel dolor lobortis vulputate quis in dui. Ut velit quam, accumsan interdum massa et, dictum ultricies erat. Etiam et felis feugiat velit dapibus maximus. Mauris posuere libero velit, non bibendum quam rhoncus vel. Suspendisse faucibus lorem non libero maximus vestibulum.

Integer egestas sem id velit tristique, in mattis dui finibus. Aenean at varius risus, in pretium nisi. Integer luctus ac sapien id interdum. Curabitur tincidunt congue convallis. Nullam ex orci, suscipit ut lectus vel, venenatis tincidunt nulla. Donec at ultricies ipsum. Ut vitae arcu lacus. Donec consequat in leo nec interdum. Nulla a cursus augue. Donec sed nisi ligula. Mauris non porta velit. Nulla lobortis enim non libero cursus hendrerit. Sed luctus mattis augue eget placerat.

Vestibulum sed ex id dolor iaculis mollis. Vivamus eget nulla diam. Integer tincidunt justo metus, quis vestibulum eros bibendum ac. Cras non luctus ante. Praesent et orci in nibh posuere ultrices nec ut purus. Suspendisse iaculis, turpis eget consequat bibendum, neque ex interdum ligula, a blandit justo dolor vitae velit. Duis magna sem, iaculis maximus tempor et, eleifend sit amet nisi. Vestibulum sodales purus non nibh maximus, id gravida augue dapibus. Proin tempus diam a risus luctus, ac tempus orci viverra. Donec hendrerit dapibus est, sit amet imperdiet enim vulputate vel. Donec egestas neque odio, sagittis consequat elit mollis non. Duis ac ornare ex, vitae porta metus. Sed tristique nibh ut turpis blandit consequat. Nam egestas, augue quis euismod interdum, nunc quam scelerisque ipsum, at finibus purus velit ac dolor. Sed ex nisi, feugiat vel eros vitae, suscipit bibendum mi.

Nam luctus volutpat sollicitudin. Aliquam condimentum nunc neque, quis posuere felis finibus eu. Ut ultrices velit a lectus aliquet, ac pharetra tellus volutpat. Cras sollicitudin egestas urna ac feugiat. Ut velit leo, elementum et rhoncus id, mattis id odio. Morbi sit amet ligula eget lectus semper fermentum. Vivamus efficitur enim leo, ac hendrerit magna dictum a. Donec non diam rutrum, lacinia erat et, dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare mi augue, vel commodo erat lacinia nec.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem ac rhoncus vehicula. Vivamus vel ipsum malesuada lacus fringilla aliquet eget sed orci. Nullam non tortor dolor. Nullam orci ipsum, rhoncus ut sodales sed, aliquam ut libero. Etiam dictum a diam sit amet blandit. Aenean id neque semper, dictum elit ultrices, posuere purus. Suspendisse tempus dolor vel risus iaculis suscipit. Curabitur eu dolor gravida risus porta consequat ut id dolor. Cras eget nisl ut est facilisis molestie. Praesent eget commodo urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer id dui nisl. Nulla scelerisque tellus ante, vel hendrerit nibh pharetra gravida. Pellentesque tempor porttitor nibh, id tempus leo luctus non. Ut vel ultrices massa. Suspendisse consectetur ac arcu rutrum efficitur. Vestibulum vehicula est vel dolor lobortis vulputate quis in dui. Ut velit quam, accumsan interdum massa et, dictum ultricies erat. Etiam et felis feugiat velit dapibus maximus. Mauris posuere libero velit, non bibendum quam rhoncus vel. Suspendisse faucibus lorem non libero maximus vestibulum.

Integer egestas sem id velit tristique, in mattis dui finibus. Aenean at varius risus, in pretium nisi. Integer luctus ac sapien id interdum. Curabitur tincidunt congue convallis. Nullam ex orci, suscipit ut lectus vel, venenatis tincidunt nulla. Donec at ultricies ipsum. Ut vitae arcu lacus. Donec consequat in leo nec interdum. Nulla a cursus augue. Donec sed nisi ligula. Mauris non porta velit. Nulla lobortis enim non libero cursus hendrerit. Sed luctus mattis augue eget placerat.

Vestibulum sed ex id dolor iaculis mollis. Vivamus eget nulla diam. Integer tincidunt justo metus, quis vestibulum eros bibendum ac. Cras non luctus ante. Praesent et orci in nibh posuere ultrices nec ut purus. Suspendisse iaculis, turpis eget consequat bibendum, neque ex interdum ligula, a blandit justo dolor vitae velit. Duis magna sem, iaculis maximus tempor et, eleifend sit amet nisi. Vestibulum sodales purus non nibh maximus, id gravida augue dapibus. Proin tempus diam a risus luctus, ac tempus orci viverra. Donec hendrerit dapibus est, sit amet imperdiet enim vulputate vel. Donec egestas neque odio, sagittis consequat elit mollis non. Duis ac ornare ex, vitae porta metus. Sed tristique nibh ut turpis blandit consequat. Nam egestas, augue quis euismod interdum, nunc quam scelerisque ipsum, at finibus purus velit ac dolor. Sed ex nisi, feugiat vel eros vitae, suscipit bibendum mi.

Nam luctus volutpat sollicitudin. Aliquam condimentum nunc neque, quis posuere felis finibus eu. Ut ultrices velit a lectus aliquet, ac pharetra tellus volutpat. Cras sollicitudin egestas urna ac feugiat. Ut velit leo, elementum et rhoncus id, mattis id odio. Morbi sit amet ligula eget lectus semper fermentum. Vivamus efficitur enim leo, ac hendrerit magna dictum a. Donec non diam rutrum, lacinia erat et, dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare mi augue, vel commodo erat lacinia nec.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem ac rhoncus vehicula. Vivamus vel ipsum malesuada lacus fringilla aliquet eget sed orci. Nullam non tortor dolor. Nullam orci ipsum, rhoncus ut sodales sed, aliquam ut libero. Etiam dictum a diam sit amet blandit. Aenean id neque semper, dictum elit ultrices, posuere purus. Suspendisse tempus dolor vel risus iaculis suscipit. Curabitur eu dolor gravida risus porta consequat ut id dolor. Cras eget nisl ut est facilisis molestie. Praesent eget commodo urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer id dui nisl. Nulla scelerisque tellus ante, vel hendrerit nibh pharetra gravida. Pellentesque tempor porttitor nibh, id tempus leo luctus non. Ut vel ultrices massa. Suspendisse consectetur ac arcu rutrum efficitur. Vestibulum vehicula est vel dolor lobortis vulputate quis in dui. Ut velit quam, accumsan interdum massa et, dictum ultricies erat. Etiam et felis feugiat velit dapibus maximus. Mauris posuere libero velit, non bibendum quam rhoncus vel. Suspendisse faucibus lorem non libero maximus vestibulum.

Integer egestas sem id velit tristique, in mattis dui finibus. Aenean at varius risus, in pretium nisi. Integer luctus ac sapien id interdum. Curabitur tincidunt congue convallis. Nullam ex orci, suscipit ut lectus vel, venenatis tincidunt nulla. Donec at ultricies ipsum. Ut vitae arcu lacus. Donec consequat in leo nec interdum. Nulla a cursus augue. Donec sed nisi ligula. Mauris non porta velit. Nulla lobortis enim non libero cursus hendrerit. Sed luctus mattis augue eget placerat.

Vestibulum sed ex id dolor iaculis mollis. Vivamus eget nulla diam. Integer tincidunt justo metus, quis vestibulum eros bibendum ac. Cras non luctus ante. Praesent et orci in nibh posuere ultrices nec ut purus. Suspendisse iaculis, turpis eget consequat bibendum, neque ex interdum ligula, a blandit justo dolor vitae velit. Duis magna sem, iaculis maximus tempor et, eleifend sit amet nisi. Vestibulum sodales purus non nibh maximus, id gravida augue dapibus. Proin tempus diam a risus luctus, ac tempus orci viverra. Donec hendrerit dapibus est, sit amet imperdiet enim vulputate vel. Donec egestas neque odio, sagittis consequat elit mollis non. Duis ac ornare ex, vitae porta metus. Sed tristique nibh ut turpis blandit consequat. Nam egestas, augue quis euismod interdum, nunc quam scelerisque ipsum, at finibus purus velit ac dolor. Sed ex nisi, feugiat vel eros vitae, suscipit bibendum mi.

Nam luctus volutpat sollicitudin. Aliquam condimentum nunc neque, quis posuere felis finibus eu. Ut ultrices velit a lectus aliquet, ac pharetra tellus volutpat. Cras sollicitudin egestas urna ac feugiat. Ut velit leo, elementum et rhoncus id, mattis id odio. Morbi sit amet ligula eget lectus semper fermentum. Vivamus efficitur enim leo, ac hendrerit magna dictum a. Donec non diam rutrum, lacinia erat et, dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare mi augue, vel commodo erat lacinia nec.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem ac rhoncus vehicula. Vivamus vel ipsum malesuada lacus fringilla aliquet eget sed orci. Nullam non tortor dolor. Nullam orci ipsum, rhoncus ut sodales sed, aliquam ut libero. Etiam dictum a diam sit amet blandit. Aenean id neque semper, dictum elit ultrices, posuere purus. Suspendisse tempus dolor vel risus iaculis suscipit. Curabitur eu dolor gravida risus porta consequat ut id dolor. Cras eget nisl ut est facilisis molestie. Praesent eget commodo urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer id dui nisl. Nulla scelerisque tellus ante, vel hendrerit nibh pharetra gravida. Pellentesque tempor porttitor nibh, id tempus leo luctus non. Ut vel ultrices massa. Suspendisse consectetur ac arcu rutrum efficitur. Vestibulum vehicula est vel dolor lobortis vulputate quis in dui. Ut velit quam, accumsan interdum massa et, dictum ultricies erat. Etiam et felis feugiat velit dapibus maximus. Mauris posuere libero velit, non bibendum quam rhoncus vel. Suspendisse faucibus lorem non libero maximus vestibulum.

Integer egestas sem id velit tristique, in mattis dui finibus. Aenean at varius risus, in pretium nisi. Integer luctus ac sapien id interdum. Curabitur tincidunt congue convallis. Nullam ex orci, suscipit ut lectus vel, venenatis tincidunt nulla. Donec at ultricies ipsum. Ut vitae arcu lacus. Donec consequat in leo nec interdum. Nulla a cursus augue. Donec sed nisi ligula. Mauris non porta velit. Nulla lobortis enim non libero cursus hendrerit. Sed luctus mattis augue eget placerat.

Vestibulum sed ex id dolor iaculis mollis. Vivamus eget nulla diam. Integer tincidunt justo metus, quis vestibulum eros bibendum ac. Cras non luctus ante. Praesent et orci in nibh posuere ultrices nec ut purus. Suspendisse iaculis, turpis eget consequat bibendum, neque ex interdum ligula, a blandit justo dolor vitae velit. Duis magna sem, iaculis maximus tempor et, eleifend sit amet nisi. Vestibulum sodales purus non nibh maximus, id gravida augue dapibus. Proin tempus diam a risus luctus, ac tempus orci viverra. Donec hendrerit dapibus est, sit amet imperdiet enim vulputate vel. Donec egestas neque odio, sagittis consequat elit mollis non. Duis ac ornare ex, vitae porta metus. Sed tristique nibh ut turpis blandit consequat. Nam egestas, augue quis euismod interdum, nunc quam scelerisque ipsum, at finibus purus velit ac dolor. Sed ex nisi, feugiat vel eros vitae, suscipit bibendum mi.

Nam luctus volutpat sollicitudin. Aliquam condimentum nunc neque, quis posuere felis finibus eu. Ut ultrices velit a lectus aliquet, ac pharetra tellus volutpat. Cras sollicitudin egestas urna ac feugiat. Ut velit leo, elementum et rhoncus id, mattis id odio. Morbi sit amet ligula eget lectus semper fermentum. Vivamus efficitur enim leo, ac hendrerit magna dictum a. Donec non diam rutrum, lacinia erat et, dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare mi augue, vel commodo erat lacinia nec.
          </p>
          
          
        </div>
    )
}