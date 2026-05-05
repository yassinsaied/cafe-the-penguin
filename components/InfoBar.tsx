import { Phone, MapPin, Clock } from 'lucide-react';
import InfoItem from './InfoItem';

export default function InfoBar() {
  return (
    <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 bg-[rgba(12,8,3,0.92)] backdrop-blur-sm">
      {/* Gold top accent line */}
      <div
        className="h-0.75"
        style={{
          background: 'linear-gradient(to right, #3D1F00, #C9A84C 30%, #C9A84C 70%, #3D1F00)',
        }}
      />

      {/* Three info columns */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <InfoItem
          icon={<Phone className="text-gold w-5 h-5" />}
          title="+92-0316-12345"
          sub={
            <>
              A small river named Duden flows by their
              <br />
              place and supplies.
            </>
          }
          bordered
        />
        <InfoItem
          icon={<MapPin className="text-gold w-5 h-5" />}
          title="DHA 3, Commercial Area"
          sub="Opposite to Giga Mall, Islamabad"
          bordered
        />
        <InfoItem
          icon={<Clock className="text-gold w-5 h-5" />}
          title="OPEN EVERY DAY"
          sub="8:00am – 9:00pm"
        />
      </div>
    </div>
  );
}
